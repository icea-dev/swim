package main.org.ws.daos.exception;


public class DaoException extends RuntimeException {

	/**
	 * Cria uma exceção de acesso a dados sem uma mensagem de erro.
	 */
	public DaoException()
	{
		super();

	}

	/**
	 * Cria uma nova exceção de acesso a dados com uma mensagem de erro.
	 *  
	 * @param message a mensagem de erro.
	 */
	public DaoException(String message) 
	{
		super(message);

	}

	/**
	 * Cria uma nova exceção de acesso a dados com uma mensagem de erro e a causa.
	 *   
	 * @param message
	 * @param throwable
	 */
	public DaoException(String message, Throwable throwable) 
	{
		super(message, throwable);

	}


}
