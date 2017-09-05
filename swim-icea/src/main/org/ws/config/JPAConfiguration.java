package main.org.ws.config;


import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.annotation.*;

import javax.enterprise.context.RequestScoped;
import javax.enterprise.inject.Default;
import javax.enterprise.inject.Disposes;
import javax.enterprise.inject.Produces;


public class JPAConfiguration {
	
//	private EntityManagerFactory emf;
//	
//	@RequestScoped
//	@Produces
//	@Default
//	public EntityManager getEntityManager(){
//		
//		return emf.createEntityManager();
//	}
//	
//	@PostConstruct
//	public void init(){
//		emf = Persistence.createEntityManagerFactory("wsteste");
//	}
//	
//	public void dispose(@Disposes @Default EntityManager entityManager){
//		if(entityManager != null){
//			entityManager.close();
//		}
//	}
	
	
	private static EntityManagerFactory emf = null;
	private static EntityManager em = null;
	
	public static EntityManager getEntityManager(String persistenceUnity){
		
		if (emf == null && em == null){
			
			emf = Persistence.createEntityManagerFactory(persistenceUnity);
			em = emf.createEntityManager();
		}
		
		return em;
	}

	public static void closeEntityManager(){
		
		em.close();
		emf.close();
	}
}