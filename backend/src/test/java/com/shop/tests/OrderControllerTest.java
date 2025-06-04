package com.shop.tests;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.shop.controllers.OrderController;
import com.shop.entities.Order;
import com.shop.services.OrderService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.*;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;

import java.time.LocalDate;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;

@WebMvcTest(OrderController.class)
public class OrderControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private OrderService service;

    @Test
    void testGetAll() throws Exception {
        List<Order> orders = List.of(new Order(1L, "Ivan", LocalDate.now(), "NEW", null));
        Mockito.when(service.getAll()).thenReturn(orders);

        mockMvc.perform(get("/orders"))
               .andExpect(status().isOk())
               .andExpect(jsonPath("$[0].customerName").value("Ivan"));
    }
}
