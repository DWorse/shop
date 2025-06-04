package com.shop.services;

import com.shop.entities.OrderItem;
import com.shop.repositories.OrderItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderItemService {
    @Autowired private OrderItemRepository repo;

    public List<OrderItem> getByOrder(Long orderId) {
        return repo.findByOrderId(orderId);
    }

    public OrderItem add(OrderItem item) {
        return repo.save(item);
    }
}
