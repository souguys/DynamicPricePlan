package com.verizon.dynamicpp.data;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.Random;
import com.google.gson.Gson;
import com.verizon.dynamicpp.data.PricePlanObject;

public class ConvertObjToJson {
	public String marketPriceJsonString = "";
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
		return "{data:"+gson.toJson(list)+"}";
	}
	
	public Map<String,String> getVerizonCurrentDataAsMap() {
		Gson gson = new Gson();
		Properties prop = new Properties();
		InputStream input = null;
		Map currentVerizonPriceMap = null;
		List<PricePlanObject> list = new ArrayList<PricePlanObject>();
		try {
			
			//input = new FileInputStream("verizonpricedata.properties");
			input = this.getClass().getClassLoader().getResourceAsStream("com/verizon/dynamicpp/properties/verizonpricedata.properties");
			
			// load a properties file
			prop.load(input);
			String verizonPlan = prop.getProperty("verizonplan");
			String verizonPrice = prop.getProperty("verizonprice");
			String [] vzPlanArr = verizonPlan.split(",");
			String [] vzPriceArr = verizonPrice.split(",");
			currentVerizonPriceMap = new HashMap<String,String>();
			
			for(int i=0;i<vzPlanArr.length;i++){
				currentVerizonPriceMap.put(vzPlanArr[i], vzPriceArr[i]);
			}
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
		return currentVerizonPriceMap;
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
		return "{data:"+gson.toJson(list)+"}";
	}
	
	public String getMarketDataForCompetitorsAsJson() {
		Gson gson = new Gson();
		Random random = new Random();
		List<CompetitorPricePlanObject> list = new ArrayList<CompetitorPricePlanObject>();
		String [] competitorPlanArr = getCompetitorPlan().split(",");		
		CompetitorPricePlanObject pricePlanObj = null;
		for(int i=0;i<competitorPlanArr.length;i++){
			pricePlanObj = new CompetitorPricePlanObject();
			pricePlanObj.setPlansize(competitorPlanArr[i]);
			if("S".equals(competitorPlanArr[i])){
				pricePlanObj.setAtt(showRandomInteger(25, 30, random)+"");
				pricePlanObj.setSprint(showRandomInteger(25, 30, random)+"");
				pricePlanObj.setTmobile(showRandomInteger(25, 30, random)+"");
			}
			if("M".equals(competitorPlanArr[i])){
				pricePlanObj.setAtt(showRandomInteger(35, 40, random)+"");
				pricePlanObj.setSprint(showRandomInteger(35, 40, random)+"");
				pricePlanObj.setTmobile(showRandomInteger(35, 40, random)+"");
			}
			if("L".equals(competitorPlanArr[i])){
				pricePlanObj.setAtt(showRandomInteger(45, 50, random)+"");
				pricePlanObj.setSprint(showRandomInteger(45, 50, random)+"");
				pricePlanObj.setTmobile(showRandomInteger(45, 50, random)+"");
			}
			if("XL".equals(competitorPlanArr[i])){
				pricePlanObj.setAtt(showRandomInteger(60, 65, random)+"");
				pricePlanObj.setSprint(showRandomInteger(60, 65, random)+"");
				pricePlanObj.setTmobile(showRandomInteger(60, 65, random)+"");
			}
			
			list.add(pricePlanObj);
		}
		//System.out.println(gson.toJson(list));
		setMarketPriceJsonString(gson.toJson(list));
		return gson.toJson(list);
	}
	
	
	public String getMarketDataAsObject(){
		String markDataJsonString = getMarketDataForCompetitorsAsJson();
		Gson gson = new Gson();
		CompetitorPricePlanObject competitorPricePlanObject = gson.fromJson("{list:"+markDataJsonString+"}", CompetitorPricePlanObject.class);
		List<CompetitorPricePlanObject> marketPriceList = competitorPricePlanObject.getList();
		List<PricePlanObject> proposedList = new ArrayList<PricePlanObject>();
		List<PricePlanObject> newVerizonList = new ArrayList<PricePlanObject>();
		PricePlanObject newplan = null;
		PricePlanObject proposed = null;
		int i=0;
		for(CompetitorPricePlanObject planObj:marketPriceList){
			newplan = new PricePlanObject();
			proposed = new PricePlanObject();
			if("S".equals(planObj.getPlansize())){
				newplan.setName("S");
				int avg = (Integer.parseInt(planObj.getAtt())+Integer.parseInt(planObj.getSprint())+Integer.parseInt(planObj.getTmobile()))/3;
				newplan.setData(avg+"");
				proposed.setName("S");
				proposed.setData1(getVerizonCurrentDataAsMap().get(planObj.getPlansize()));
				proposed.setData2(avg+"");
			}
			else if("M".equals(planObj.getPlansize())){
				newplan.setName("M");
				int avg = (Integer.parseInt(planObj.getAtt())+Integer.parseInt(planObj.getSprint())+Integer.parseInt(planObj.getTmobile()))/3;
				newplan.setData(avg+"");
				proposed.setName("M");
				proposed.setData1(getVerizonCurrentDataAsMap().get(planObj.getPlansize()));
				proposed.setData2(avg+"");
			}
			else if("L".equals(planObj.getPlansize())){
				newplan.setName("L");
				int avg = (Integer.parseInt(planObj.getAtt())+Integer.parseInt(planObj.getSprint())+Integer.parseInt(planObj.getTmobile()))/3;
				newplan.setData(avg+"");
				proposed.setName("L");
				proposed.setData1(getVerizonCurrentDataAsMap().get(planObj.getPlansize()));
				proposed.setData2(avg+"");
			}
			else{
				newplan.setName("XL");
				int avg = getAvg(Integer.parseInt(planObj.getAtt()),Integer.parseInt(planObj.getSprint()),Integer.parseInt(planObj.getTmobile()));
				//int avg = (Integer.parseInt(planObj.getAtt())+Integer.parseInt(planObj.getSprint())+Integer.parseInt(planObj.getTmobile()))/3;
				newplan.setData(avg+"");
				proposed.setName("XL");
				proposed.setData1(getVerizonCurrentDataAsMap().get(planObj.getPlansize()));
				proposed.setData2(avg+"");
			}
			proposedList.add(proposed);
			newVerizonList.add(newplan);
		}
		return "{\"proposedList\":"+gson.toJson(proposedList)+",\"currentMarketList\":"+markDataJsonString+",\"proposedData\":"+gson.toJson(newVerizonList)+"}";
		//return "{data:"+gson.toJson(proposedList)+"}";
	}
	
	public int getAvg(int attPrice, int sprintPrice, int tmobilePrice) {
		return (attPrice+sprintPrice+tmobilePrice)/3;
	}

	public String getCompetitorPlan(){
		return "S,M,L,XL";
	}
	
	private  int showRandomInteger(int aStart, int aEnd, Random aRandom){
	    if (aStart > aEnd) {
	      throw new IllegalArgumentException("Start cannot exceed End.");
	    }
	    //get the range, casting to long to avoid overflow problems
	    long range = (long)aEnd - (long)aStart + 1;
	    // compute a fraction of the range, 0 <= frac < range
	    long fraction = (long)(range * aRandom.nextDouble());
	    int randomNumber =  (int)(fraction + aStart);
	    //System.out.println(randomNumber+"");
	    return randomNumber;
	 }

	public String getMarketPriceJsonString() {
		return marketPriceJsonString;
	}

	public void setMarketPriceJsonString(String marketPriceJsonString) {
		this.marketPriceJsonString = marketPriceJsonString;
	}


}
