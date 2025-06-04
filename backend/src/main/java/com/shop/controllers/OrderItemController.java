package com.shop.controllers;

import com.shop.entities.OrderItem;
import com.shop.services.OrderItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/order-items")
@CrossOrigin
public class OrderItemController {

    @Autowired
    private OrderItemService service;

    @GetMapping("/by-order/{orderId}")
    public List<OrderItem> getByOrder(@PathVariable Long orderId) {
        return service.getByOrder(orderId);
    }

    @PostMapping
    public OrderItem add(@RequestBody OrderItem item) {
        return service.add(item);
    }
}
