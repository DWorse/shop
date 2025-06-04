package com.shop.services;

import com.shop.entities.Order;
import com.shop.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class OrderService {
    @Autowired private OrderRepository repo;

    public List<Order> getAll() {
        return repo.findAll();
    }

    public Order getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    public Order create(Order o) {
        o.setDate(LocalDate.now());
        o.setStatus("NEW");
        return repo.save(o);
    }

    public Order updateStatus(Long id, String newStatus) {
        Order o = getById(id);
        if (o != null) {
            o.setStatus(newStatus);
            return repo.save(o);
        }
        return null;
    }
}
