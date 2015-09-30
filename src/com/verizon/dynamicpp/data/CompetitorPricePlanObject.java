package com.verizon.dynamicpp.data;

import java.util.List;



public class CompetitorPricePlanObject {
	String plansize;
	String att;
	String sprint;
	String tmobile;
	public String getPlansize() {
		return plansize;
	}
	public void setPlansize(String plansize) {
		this.plansize = plansize;
	}
	public String getAtt() {
		return att;
	}
	public void setAtt(String att) {
		this.att = att;
	}
	public String getSprint() {
		return sprint;
	}
	public void setSprint(String sprint) {
		this.sprint = sprint;
	}
	public String getTmobile() {
		return tmobile;
	}
	public void setTmobile(String tmobile) {
		this.tmobile = tmobile;
	}
	List<CompetitorPricePlanObject> list;

	public List<CompetitorPricePlanObject> getList() {
		return list;
	}

	public void setList(List<CompetitorPricePlanObject> list) {
		this.list = list;
	}
	
}
