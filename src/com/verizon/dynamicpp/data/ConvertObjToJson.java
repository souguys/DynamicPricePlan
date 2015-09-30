package com.verizon.dynamicpp.data;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;
import java.util.Random;
import com.google.gson.Gson;

public class ConvertObjToJson {
	public String getVerizonCurrentData() {
		Gson gson = new Gson();
		Properties prop = new Properties();
		InputStream input = null;
		List<PricePlanObject> list = new ArrayList<PricePlanObject>();
		try {
			
			//input = new FileInputStream("verizonpricedata.properties");
			input = this.getClass().getClassLoader().getResourceAsStream("com/verizon/dynamicpp/properties/verizonpricedata.properties");
			
			// load a properties file
			prop.load(input);
			
			// get the property value and print it out
			System.out.println(prop.getProperty("verizonplan"));
			System.out.println(prop.getProperty("verizonprice"));
			String verizonPlan = prop.getProperty("verizonplan");
			String verizonPrice = prop.getProperty("verizonprice");
			String [] vzPlanArr = verizonPlan.split(",");
			String [] vzPriceArr = verizonPrice.split(",");
			System.out.println(vzPlanArr.length);
			
			PricePlanObject pricePlanObj = null;
			for(int i=0;i<vzPlanArr.length;i++){
				pricePlanObj = new PricePlanObject();
				pricePlanObj.setData(vzPriceArr[i]);
				pricePlanObj.setName(vzPlanArr[i]);
				list.add(pricePlanObj);
			}
			System.out.println("data:{"+gson.toJson(list)+"}");
		} 
		catch (IOException ex) {
			ex.printStackTrace();
		} 
		finally {
			if (input != null) {
				try {
					input.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
		return "data:{"+gson.toJson(list)+"}";
	}
	
	public String getCompetitorData() {
		Gson gson = new Gson();
		Properties prop = new Properties();
		InputStream input = null;
		List<CompetitorPricePlanObject> list = new ArrayList<CompetitorPricePlanObject>();
		try {
			
			//input = new FileInputStream("verizonpricedata.properties");
			input = this.getClass().getClassLoader().getResourceAsStream("com/verizon/dynamicpp/properties/competitorprice.properties");
			
			// load a properties file
			prop.load(input);
			
			// get the property value and print it out
			System.out.println(prop.getProperty("competitorplan"));
			System.out.println(prop.getProperty("attprice"));
			System.out.println(prop.getProperty("sprintprice"));
			System.out.println(prop.getProperty("tmobileprice"));
			String competitorPlan = prop.getProperty("competitorplan");
			String attPrice = prop.getProperty("attprice");
			String sprintPrice = prop.getProperty("sprintprice");
			String tmobilePrice = prop.getProperty("tmobileprice");
			String [] competitorPlanArr = competitorPlan.split(",");
			String [] attPriceArr = attPrice.split(",");
			String [] sprintPriceArr = sprintPrice.split(",");
			String [] tmobilePriceArr = tmobilePrice.split(",");
			System.out.println(competitorPlanArr.length);
			
			CompetitorPricePlanObject pricePlanObj = null;
			for(int i=0;i<competitorPlanArr.length;i++){
				pricePlanObj = new CompetitorPricePlanObject();
				pricePlanObj.setPlansize(competitorPlanArr[i]);
				pricePlanObj.setAtt(attPriceArr[i]);
				pricePlanObj.setSprint(sprintPriceArr[i]);
				pricePlanObj.setTmobile(tmobilePriceArr[i]);
				list.add(pricePlanObj);
			}
			System.out.println("data:{"+gson.toJson(list)+"}");
		} 
		catch (IOException ex) {
			ex.printStackTrace();
		} 
		finally {
			if (input != null) {
				try {
					input.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
		return "data:{"+gson.toJson(list)+"}";
	}


}
