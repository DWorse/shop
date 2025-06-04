package com.shop.tests;

import com.shop.entities.Product;
import com.shop.repositories.ProductRepository;
import com.shop.services.ProductService;
import org.junit.jupiter.api.*;
import org.mockito.*;

import java.util.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class ProductServiceTest {

    @InjectMocks
    private ProductService service;

    @Mock
    private ProductRepository repo;

    @BeforeEach
    void setup() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetAll() {
        List<Product> products = List.of(new Product(1L, "Pen", "Stationery", 2.0, 100));
        when(repo.findAll()).thenReturn(products);

        List<Product> result = service.getAll();
        assertEquals(1, result.size());
        assertEquals("Pen", result.get(0).getName());
    }

    @Test
    void testCreate() {
        Product p = new Product(null, "Mouse", "Electronics", 25.0, 50);
        when(repo.save(p)).thenReturn(new Product(1L, "Mouse", "Electronics", 25.0, 50));

        Product saved = service.create(p);
        assertNotNull(saved.getId());
    }
}
