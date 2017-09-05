# coding=utf-8


import pickle
import requests
import time
from lxml import html
import sys, json
import selenium
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException

from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from selenium.common.exceptions import NoSuchElementException
from selenium.common.exceptions import NoAlertPresentException

reload(sys)
sys.setdefaultencoding('utf-8')

sleepTime = 3

################################################################################################

def clear_atm(category):


	category = [i.replace('\n','') for i in category]
	
	category = [i.strip(' ') for i in category if len(i) > 3 and not None]

	return filter(None,category)

################################################################################################

def get_atm(tree):

	data = {}

	# Activity Category
	try:
		x = tree.xpath('//div[contains(@class,"field-name-field-atm-activity-category")]/div/descendant::*/text()')
		

		data['actCategory'] = x
	except:
		data['actCategory'] = None		
		print('except','ATM activity category')

	#ATM data category
	try:
		x = tree.xpath('//div[contains(@class,"field-name-field-atm-data-category")]/div/descendant::*/text()') 

		data['dataCategory'] = x

	except:
		data['dataCategory'] = None
		print('except', 'ATM data category')

	#Atm stakeholders 
	try:

		x = tree.xpath('//div[contains(@class,"field-name-field-atm-stakeholders")]/div/descendant::*/text()')


		data['dataStakeholder'] = x
	except:
		data['dataStakeholder'] = None
		print('except', 'Atm stakeholders')

	#atm regions 
	try:

		x = tree.xpath('//div[contains(@class,"field-name-field-regions")]/div/descendant::*/text()')
		data['regions'] = x

	except:
		data['regions'] = None
		print('Except','Regioes')

	#atm flight phases
	try:
		x = tree.xpath('//div[contains(@class,"field-name-field-flight-phases")]/div/descendant::*/text()')

		data['flightPhases'] = x
	except:
		data['flightPhases'] = None
		print('Except','atm flight phases')

	return data


################################################################################################

def get_header(tree):
	
	data = {}

	try:

		name = tree.xpath('//div[contains(@class,"page-header")]/h1/text()') 
		name = [i.replace('\t','') for i in name]
		data['nameService'] = clear_atm(name)[0]

		per_describe = tree.xpath('//div[@class="percent-complete"]/text()')
		data['percentPrescribe'] =  per_describe[0]
		
	except:
		data['percentPrescribe'] = None
		print('Exception', 'NOME SERVICO')

	try:
	
		version = tree.xpath('//*[@id="block-system-main"]/div/div/div/div[1]/div/div[2]/div/div[1]/div/div/div/div[1]/div/div/div[2]/div/text()')

		data['version'] = version[0]

		implementStatus = tree.xpath('//*[@id="block-system-main"]/div/div/div/div[1]/div/div[2]/div/div[1]/div/div/div/div[5]/div/div/div[2]/div/text()')

		data['implementStatus'] = implementStatus[0]
	except:
		print('Exception', 'VERSAO Servico')
		data['implementStatus'] = None

	try:
		versionCategory  = tree.xpath('//*[@id="block-system-main"]/div/div/div/div[1]/div/div[2]/div/div[1]/div/div/div/div[7]/div/div/div[2]/div/text()')
		data['versionCategory'] = versionCategory[0]

	except:
		data['versionCategory'] =None
		print('Exception', 'Categoria Versao')

	return data

################################################################################################

def get_registrationProcess(tree):
	
	data = {}

	#Service Description
	try:
	
		serviceDescription = tree.xpath('//div[@id="rmjs-1"]/descendant::*/text()')
		
		data['serviceDescription'] = serviceDescription
	except:
		data['serviceDescription'] = None
		print('Except', 'Service Description')

	# Service Tecnical Interface
	try:
		serviceTecnicalInterface = tree.xpath('//*[@id="block-system-main"]/div/div/div/div[3]/div/div[2]/div/div[1]/div/div/div/div[3]/div/div/div/div/div/div[2]/div/div/descendant::*/text()')
		
		data['serviceTecnicalInterface'] = serviceTecnicalInterface
	except:
		data['serviceTecnicalInterface'] = None
		print('Except', 'Service Tecnical Interface')
	
	return data

################################################################################################

def get_technicalIterface(tree):

	data = {}

	try:
		driver.find_element_by_xpath("/html/body/div[2]/section/div/div[3]/div/div/div/div/div[3]/div/div[2]/div/div[1]/div/div/div/div[3]/div/div/div/div/div/div[1]/div/div/div/a/img").click()
	except:
		print('Except', 'Not Found Icon Technical Interface')
		return data

	try:
		source = driver.current_url
	except:
		print('Except', 'Cannot get Current Url')

	driver.get(source)

	time.sleep(sleepTime)

	tree1 = html.fromstring(driver.page_source)

	try:
		dataExchangeStandardsDesc = tree1.xpath('//div[@class="field-content"]/p/text()')
		data['dataExchangeStandardsDesc'] = dataExchangeStandardsDesc
	except:
		print('Except', 'Cannot get Data Exchange Standards Description')

	try:
		dataExchangeStandards = tree1.xpath('//div[@class="inside panels-flexible-region-inside panels-flexible-region-26-info_left-inside panels-flexible-region-inside-first"]/div/div/div/div/div/div/div/div/span/span/a/text()')
		data['dataExchangeStandards'] = dataExchangeStandards
	except:
		print('Except', 'Cannot get Data Exchange Standards')

	return data


################################################################################################


baseurl  ='https://eur-registry.swim.aero'

driver  = webdriver.Chrome('driver/chromedriver')

driver.get('https://eur-registry.swim.aero/user/login')

time.sleep(sleepTime)

username = driver.find_element_by_id("edit-name")
password = driver.find_element_by_id("edit-pass")

username.send_keys("camilacb@icea.gov.br")
password.send_keys("Camil@01")

driver.find_element_by_id("edit-submit").click()

pages = '/service-implementations?sid=All&field_version_category_tid=All&title=&body_value=&&&&&&&&page='

data_json = {}

j = 0

for k in xrange(0,3):

	driver.get(baseurl+pages+str(k))

	time.sleep(sleepTime)

	tree = html.fromstring(driver.page_source)

	s = tree.xpath('//a/@href')

	ss = [x for x in s if '/services/' in x]

	services = []
	for i in ss:
		if i not in services:
			services.append(i)

	print services, len(services)

	for i in services:

		print (baseurl+i)

		driver.get(baseurl+i)

		time.sleep(sleepTime)

		tree = html.fromstring(driver.page_source)

		header = get_header(tree)

		atm = get_atm(tree)

		regProcess = get_registrationProcess(tree)

		techInterface = get_technicalIterface(tree)

		data_json[j] = {'header': header, 'atm': atm,'registrationProcess': regProcess , 'technicalInterface': techInterface}

		j+=1

		print j

with open('resultado1.json','w') as out:
	json.dump(data_json,out)
	

