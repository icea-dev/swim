package main.org.ws.daos;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import java.lang.reflect.ParameterizedType;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.hibernate.JDBCException;
import org.hibernate.exception.JDBCConnectionException;

import main.org.ws.daos.exception.DaoException;



@Transactional
public abstract class BaseDao <T> {

	
	@PersistenceContext
	EntityManager manager;
	private Class<T> persistentClass;
	
	
	/**
	 * 
	 */
	@SuppressWarnings("unchecked")
	public BaseDao() 
	{
		this.persistentClass = (Class<T>)((ParameterizedType) this.getClass().getGenericSuperclass()).getActualTypeArguments()[0];
		
	}
	
	/** Define o gerenciador de serviços para a persistência no banco. */
	public void setEntityManager(EntityManager manager) 
	{
		this.manager = manager;
		
	}
	
	/**
	 * 
	 * @param query
	 * @return
	 */
	protected List < T > executeQuery(String query) throws DaoException 
	{
		try {
			return manager.createQuery(query,persistentClass).getResultList();

		} catch (JDBCConnectionException ex) {
			throw new DaoException("Erro de Conexão: " + ex.getMessage());
		
		} catch (JDBCException ex) {
			throw new DaoException("Erro SQL: " + ex.getMessage());
		
		} catch (Exception ex) {
			throw new DaoException("Erro: " + ex.getMessage());
			
		}
		
	}
	
	/**
	 * 
	 * @param query
	 * @return
	 */
	public Boolean executeQueryBoolean(String query) throws DaoException  
	{
		try {
			manager.createNativeQuery(query,persistentClass).executeUpdate();
		
		} catch (JDBCConnectionException ex) {
			throw new DaoException("Erro de Conexão: " + ex.getMessage());
		
		} catch (JDBCException ex) {
			throw new DaoException("Erro SQL: " + ex.getMessage());
				
		} catch (Exception ex) {
			throw new DaoException("Erro: " + ex.getMessage());
			
		}
		
		return true;
		
	}

	/**
	 * Retorna uma lista com todos os dados da classe persistida < T >.
	 * 
	 * @return List < T >
	 */
	public List < T > getAll() {
		return  executeQuery("select x from "+ persistentClass.getSimpleName() +" x order by x.id ");

	}
	
	/**
	 * Retorna a lista com todas as instâncias de < T > que se encaixam na 
	 * Coluna definida em columnName e no critério em nameParam.
	 * 
	 * @param columnName nome da coluna.
	 * @param nameParam  critério de pesquisa.     
	 * @return
	 */
	public  List< T > getFilterOneParameter(String columnName, String nameParam) {
		return  executeQuery("select x from "+ persistentClass.getSimpleName() +" x where x."+ columnName +" = '"+ nameParam+"' order by x.id ");
		
	}

	/**
	 * 
	 * @param columnName
	 * @param paramInit
	 * @param paramEnd
	 * @return
	 */
	public List < T > getFilterBetweenness(String columnName, String paramInit, String paramEnd) {
		return executeQuery("select x from "+ persistentClass.getSimpleName() +" x where x."+columnName+ 
				" between '"+paramInit+" ' and ' "+paramEnd+"'");

	}

	/**
	 * 
	 * @param model
	 * @return
	 */
	public Boolean save(T model) throws DaoException 
	{
		try {
			manager.persist(model);
			return true;
			
		} catch (JDBCConnectionException ex) {
			throw new DaoException("Erro de Conexão: " + ex.getMessage());
		
		} catch (JDBCException ex) {
			throw new DaoException("Erro SQL: " + ex.getMessage());
		
		} catch (Exception ex) {
			throw new DaoException("Erro: " + ex.getMessage());
			
		}
		
	}

	/**
	 * 
	 * @param model
	 * @return
	 */
	public Boolean update(T model) throws DaoException 
	{
		try {
			manager.merge(model);
			return true;
			
		} catch (JDBCConnectionException ex) {
			throw new DaoException("Erro de Conexão: " + ex.getMessage());
		
		} catch (JDBCException ex) {
			throw new DaoException("Erro SQL: " + ex.getMessage());
		
		} catch (Exception ex) {
			throw new DaoException("Erro: " + ex.getMessage());
			
		}

	}

	/**
	 * Deleta todas as instâncias da classe persistida < T >.
	 * 
	 * @return Boolean: true se a query foi executada com sucesso caso contrário false.
	 */
	public Boolean deleteAll() {
		return  executeQueryBoolean("delete from "+ persistentClass.getSimpleName() );
		
	}
	
	/**
	 * Deleta todas as instâncias que se encaixam na Coluna definida em 
	 * colunName e no critério em nameParam.
	 * 
	 * @param columnName nome da coluna.
	 * @param nameParam  critério de pesquisa.
	 * @return
	 */
	public  Boolean deleteFilterOneParameter(String columnName, String nameParam) {
		return  executeQueryBoolean("delete from "+ persistentClass.getSimpleName() +" x where x."+ columnName +" = '"+ nameParam+"'");
		
	}

	/**
	 * 
	 * @param columnName
	 * @param paramInit
	 * @param paramEnd
	 * @return
	 */
	public Boolean deleteFilterBetweenness(String columnName, String paramInit, String paramEnd) {
		return executeQueryBoolean("delete from "+persistentClass.getSimpleName()+" x where x."+columnName+ 
				" between '"+paramInit+"' and '"+paramEnd+"'");

	}
	
	/**
	 * Permite criar uma query específica.
	 * 
	 * @param query
	 * @return
	 */
	public List < T > getSpecificQuery(String query) {
		return executeQuery(query);
		
	}

	
	
	
}
