package com.verizon.dynamicpp.data;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class DataServlet
 */
@WebServlet("/DataServlet")
public class DataServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DataServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		ConvertObjToJson getJson = new ConvertObjToJson();
		System.out.println(request.getParameter("dataType"));
		if("verizoncurrentdata".equalsIgnoreCase(request.getParameter("dataType"))){
			System.out.println("%%%%%%%%%%%%%%");
			response.getWriter().append(getJson.getVerizonCurrentData());
		}
		if("competitordata".equalsIgnoreCase(request.getParameter("dataType"))){
			System.out.println("Competitor Data");
			response.getWriter().append(getJson.getCompetitorData());
		}
		if("newMarketData".equalsIgnoreCase(request.getParameter("dataType"))){
			response.getWriter().append(getJson.getMarketDataAsObject());
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
