package com.dynamicpp.test;

import static org.junit.Assert.*;

import org.junit.Test;


import com.verizon.dynamicpp.data.ConvertObjToJson;

public class PricePlanTest {

	@Test
	public void test() {
		ConvertObjToJson testAvg = new ConvertObjToJson();
		assertEquals("Unit Test Case Pass", 10, testAvg.getAvg(10, 10, 10));
	}

}
