import json, os, sys, time
import requests

from lxml import html
from selenium import webdriver


reload(sys)
sys.setdefaultencoding('utf-8')

sleepTime = 2


#################################################################################
def get_header(tree):
    data = {}

    try:
        serviceName = tree.xpath('//*[@id="post-content"]/div/div[2]/div/h4[1]/span/text()')
        data['serviceName'] = serviceName
    except:

        data['serviceName'] = None
        print('Expcept : ', 'Service Name')

    try:

        lifeCicleStage = tree.xpath('//*[@id="post-content"]/div/div[1]/div[1]/div/div/div/div/div/div/em/text()')
        data['lifeCicleStage'] = lifeCicleStage
    except:
        data['lifeCicleStage'] = None
        print('Expcept : ', 'Life cicle Stage')

    try:

        serviceCategory = tree.xpath('//*[@id="post-content"]/div/div[2]/div/h4[6]/span/text()')
        data['serviceCategory'] = serviceCategory

    except:
        data['serviceCategory'] = None
        print('Expcept : ', 'Service Category')

    try:

        serviceCriticalLevel = tree.xpath('//*[@id="post-content"]/div/div[2]/div/h4[9]/span/text()')
        data['serviceCriticalLevel'] = serviceCriticalLevel
    except:
        serviceCriticalLevel = None
        print('Expcept : ', 'Service Critical Level')

    try:
        serviceDescription = tree.xpath('//*[@id="post-content"]/div/div[2]/div/h4[2]/span/p/text()')
        data['serviceDescription'] = serviceDescription
    except:
        data['serviceDescription'] = None
        print('Expcept : ', 'Service Description')

    try:
        serviceVersion = tree.xpath('//*[@id="post-content"]/div/div[2]/div/h4[4]/span/text()')
        data['serviceVersion'] = serviceVersion

    except:
        data['serviceVersion'] = None
        print('Expcept : ', 'Service Version')

    try:
        messagingModel = tree.xpath('//*[@id="post-content"]/div/div[2]/div/h4[8]/span/text()')
        data['messagingMode'] = messagingModel
    except:
        data['messaging'] = None
        print('Expcept : ', 'Messaging Mode')

    try:

        interfaceType = tree.xpath('//*[@id="post-content"]/div/div[2]/div/h4[7]/span/text()')
        data['interfaceType'] = interfaceType

    except:

        data['interfaceType'] = None

        print('Expcept : ', 'Interface Type')

    try:
        atmServiceCategory = tree.xpath('//*[@id="post-content"]/div/div[2]/div/h4[5]/span/text()')
        data['atmServiceCategory'] = atmServiceCategory
    except:
        data['atmServiceCategory'] = None
        print('Expcept : ', 'ATM Service Category')

    return data


#################################################################################

def get_WSDL(tree, driver):

    data = {}

    for ii in tree:
        if '/documents' in ii:

            print(ii)

            driver.get(base_url + ii)

            time.sleep(sleepTime)

            tr = html.fromstring(driver.page_source)

            try:
                fileUrl = tr.xpath('//*[@class="views-field views-field-field-upload-file fix-width-20"]/span/a/@href')
                fileName = tr.xpath('//*[@class="views-field views-field-field-upload-file fix-width-20"]/span/a/text()')

                services_dict = {}

                for i in range(len(fileUrl)):
                    services_dict[fileName[i]] = fileUrl[i]

                for keys, values in services_dict.items():

                    if "xsd" in keys:

                        data['xsd'] = values

                        response = requests.get(values, verify=False)
                        with open("WSDL/FAA/"+keys, 'w') as fout:
                            fout.write(response.content)

                    if "wsdl" in keys:

                        data['wsdl'] = values

                        response = requests.get(values, verify=False)
                        with open("WSDL/FAA/"+keys, 'w') as fout:
                            fout.write(response.content)

            except:
                print('Exception ', 'Message Name')

    return data


#################################################################################

base_url = 'https://nsrr.faa.gov'

download_dir = "./WSDL"
chrome_options = webdriver.ChromeOptions()
preferences = {"download.default_directory": download_dir ,
                      "directory_upgrade": True,
                      "safebrowsing.enabled": True }
chrome_options.add_experimental_option("prefs", preferences)

driver = webdriver.Chrome('../driver/chromedriver', chrome_options=chrome_options)
driver.get(base_url)

time.sleep(sleepTime)

username = driver.find_element_by_id('edit-name')
password = driver.find_element_by_id('edit-pass')

username.send_keys('camilacb@icea.gov.br')
password.send_keys('Camil@01')

driver.find_element_by_id('edit-submit').click()

data_json = {}

k = 0

for i in range(0, 10):

    driver.get(base_url + '/?title=&page=' + str(i))

    tree = html.fromstring(driver.page_source)

    s = tree.xpath('//a/@href')

    ss = [x for x in s if '/services/' in x]

    for j in ss:

        data_json[k] = {}

        driver.get(base_url + j)

        time.sleep(sleepTime)

        services = html.fromstring(driver.page_source)

        treeService = services.xpath('//a/@href')

        value = get_WSDL(treeService, driver)

        print('Len : ',len(value))

        if(len(value) > 0):

            data_json[k]['WSDL'] = value

            data_json[k]['header'] = get_header(services)

        k += 1

        print(k)

with open('JSON/faaServicesWSDL.json', 'w') as jq:
    json.dump(data_json, jq)

#################################################################################



