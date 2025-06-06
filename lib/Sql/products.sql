-- Seed script for the products table with 40 products
-- The id column is omitted as Supabase will auto-generate UUIDs using uuid_generate_v4().

-- Product 1: Stylish Habesha Dresses with Colorful Neck Embroidery and Ethiopian Motifs for Occasions
INSERT INTO products (
  name, price, image, category, subcategory, design_type, 
  is_new_arrival, is_sale, sale_price, stock, description, created_at, updated_at
) VALUES (
  'Stylish Habesha Dresses with Colorful Neck Embroidery and Ethiopian Motifs for Occasions',
  294.99,
  'https://eftwxcqecemhuvobwvtb.supabase.co/storage/v1/object/sign/product-images/event-dress1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM0NmJjMzEzLWQwMjItNDU3My1hY2EzLThjNTFmMDRlMDI1ZSJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy9ldmVudC1kcmVzczEucG5nIiwiaWF0IjoxNzQ2NzIwMzkwLCJleHAiOjE3NzgyNTYzOTB9.fUia6QO-bsR8A1DNMiBpFwKGYZKf9xDNOeLqOZZRjVo',
  'Dresses',
  'Events & Holidays',
  'Traditional',
  FALSE,
  FALSE,
  NULL,
  10,
  'A stylish Habesha dress with colorful neck embroidery and Ethiopian motifs, perfect for occasions.',
  '2025-05-08T12:00:00Z',
  '2025-05-08T12:00:00Z'
);

-- Product 2: Graceful Traditional Ethiopian Dress with Green & Gold Cross Embroidery for Celebration
INSERT INTO products (
  name, price, image, category, subcategory, design_type, 
  is_new_arrival, is_sale, sale_price, stock, description, created_at, updated_at
) VALUES (
  'Graceful Traditional Ethiopian Dress with Green & Gold Cross Embroidery for Celebration',
  501.99,
  'https://eftwxcqecemhuvobwvtb.supabase.co/storage/v1/object/sign/product-images/event-dress2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM0NmJjMzEzLWQwMjItNDU3My1hY2EzLThjNTFmMDRlMDI1ZSJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy9ldmVudC1kcmVzczIucG5nIiwiaWF0IjoxNzQ2NzIwNDI0LCJleHAiOjE3NzgyNTY0MjR9.fKKthQtSDh2---bSHY_mC8PSaNI2EVc7lJbOIOIOA1w',
  'Dresses',
  'Events & Holidays',
  'Traditional',
  TRUE,
  FALSE,
  NULL,
  5,
  'A graceful traditional Ethiopian dress with green and gold cross embroidery for celebrations.',
  '2025-05-08T12:00:00Z',
  '2025-05-08T12:00:00Z'
);

-- Product 3: Beautiful Habesha Dress with Deep Red and Green Embroidery for Special Celebrations
INSERT INTO products (
  name, price, image, category, subcategory, design_type, 
  is_new_arrival, is_sale, sale_price, stock, description, created_at, updated_at
) VALUES (
  'Beautiful Habesha Dress with Deep Red and Green Embroidery for Special Celebrations',
  485.99,
  'https://eftwxcqecemhuvobwvtb.supabase.co/storage/v1/object/sign/product-images/event-dress3.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM0NmJjMzEzLWQwMjItNDU3My1hY2EzLThjNTFmMDRlMDI1ZSJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy9ldmVudC1kcmVzczMucG5nIiwiaWF0IjoxNzQ2NzIwNDQ5LCJleHAiOjE3NzgyNTY0NDl9.kOgQX4W1xdHEjjI8bpNwCyKg54LM1o6ymw6RI9UidUI',
  'Dresses',
  'Events & Holidays',
  'Modern',
  FALSE,
  TRUE,
  437.39,
  10,
  'A beautiful Habesha dress with deep red and green embroidery, ideal for special celebrations. On sale!',
  '2025-05-08T12:00:00Z',
  '2025-05-08T12:00:00Z'
);

-- Product 4: Vibrant Habesha Kemis with Hot Pink Embroidery Traditional Ethiopian Dress for Cultural Events
INSERT INTO products (
  name, price, image, category, subcategory, design_type, 
  is_new_arrival, is_sale, sale_price, stock, description, created_at, updated_at
) VALUES (
  'Vibrant Habesha Kemis with Hot Pink Embroidery Traditional Ethiopian Dress for Cultural Events',
  501.99,
  'https://eftwxcqecemhuvobwvtb.supabase.co/storage/v1/object/sign/product-images/event-dress4.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM0NmJjMzEzLWQwMjItNDU3My1hY2EzLThjNTFmMDRlMDI1ZSJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy9ldmVudC1kcmVzczQucG5nIiwiaWF0IjoxNzQ2NzIwNDkzLCJleHAiOjE3NzgyNTY0OTN9.ngg8AFIv40-GFG6fhtXMr3sMUbY_OBygtnALCvjXKxo',
  'Dresses',
  'Events & Holidays',
  'Traditional',
  TRUE,
  FALSE,
  NULL,
  8,
  'A vibrant Habesha Kemis with hot pink embroidery, perfect for cultural events.',
  '2025-05-08T12:00:00Z',
  '2025-05-08T12:00:00Z'
);

-- Product 5: Elegant Black Patterned Habesha Dress with Timeless Traditional Beauty
INSERT INTO products (
  name, price, image, category, subcategory, design_type, 
  is_new_arrival, is_sale, sale_price, stock, description, created_at, updated_at
) VALUES (
  'Elegant Black Patterned Habesha Dress with Timeless Traditional Beauty',
  378.99,
  'https://eftwxcqecemhuvobwvtb.supabase.co/storage/v1/object/sign/product-images/event-dress5.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM0NmJjMzEzLWQwMjItNDU3My1hY2EzLThjNTFmMDRlMDI1ZSJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy9ldmVudC1kcmVzczUucG5nIiwiaWF0IjoxNzQ2NzIwNTI1LCJleHAiOjE3NzgyNTY1MjV9.PGIZC7cgyWy7-XbMF6RQmSTo00iZBRUXbfM5fgQ8lhA',
  'Dresses',
  'Events & Holidays',
  'Traditional',
  FALSE,
  FALSE,
  NULL,
  12,
  'An elegant black patterned Habesha dress with timeless traditional beauty.',
  '2025-05-08T12:00:00Z',
  '2025-05-08T12:00:00Z'
);

-- Product 6: Eye-Catching Bold and Bright Traditional Habesha Dress With Beautiful Cultural Elegance
INSERT INTO products (
  name, price, image, category, subcategory, design_type, 
  is_new_arrival, is_sale, sale_price, stock, description, created_at, updated_at
) VALUES (
  'Eye-Catching Bold and Bright Traditional Habesha Dress With Beautiful Cultural Elegance',
  550.99,
  'https://eftwxcqecemhuvobwvtb.supabase.co/storage/v1/object/sign/product-images/event-dress6.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM0NmJjMzEzLWQwMjItNDU3My1hY2EzLThjNTFmMDRlMDI1ZSJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy9ldmVudC1kcmVzczYucG5nIiwiaWF0IjoxNzQ2NzIwNTQ2LCJleHAiOjE3NzgyNTY1NDZ9.qVi6t5Ug0gsTl6dJoSWWFXZed9NA-3zKoa3ZdyjL1j8',
  'Dresses',
  'Events & Holidays',
  'Traditional',
  FALSE,
  TRUE,
  495.89,
  3,
  'An eye-catching bold and bright traditional Habesha dress with cultural elegance. On sale!',
  '2025-05-08T12:00:00Z',
  '2025-05-08T12:00:00Z'
);

-- Product 7: Regal Red Cross Habesha Dress Design Red Tilf Habesha Kemis Eritrean Dress
INSERT INTO products (
  name, price, image, category, subcategory, design_type, 
  is_new_arrival, is_sale, sale_price, stock, description, created_at, updated_at
) VALUES (
  'Regal Red Cross Habesha Dress Design Red Tilf Habesha Kemis Eritrean Dress',
  299.99,
  'https://eftwxcqecemhuvobwvtb.supabase.co/storage/v1/object/sign/product-images/simple-dress1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM0NmJjMzEzLWQwMjItNDU3My1hY2EzLThjNTFmMDRlMDI1ZSJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy9zaW1wbGUtZHJlc3MxLnBuZyIsImlhdCI6MTc0NjcyMDU5MCwiZXhwIjoxNzc4MjU2NTkwfQ.zPN5qQ0oQeB44NPXzNxsV5eSN9mF2uBWIMbY9zi9nZM',
  'Dresses',
  'Simple Dresses',
  'Modern',
  FALSE,
  TRUE,
  269.99,
  20,
  'A regal red cross Habesha dress with modern design.',
  '2025-05-08T12:00:00Z',
  '2025-05-08T12:00:00Z'
);

-- Product 8: Gorgeous Habesha Dress Handwoven Habesha Kemis Modern Habesha Libs Eritrean Dress
INSERT INTO products (
  name, price, image, category, subcategory, design_type, 
  is_new_arrival, is_sale, sale_price, stock, description, created_at, updated_at
) VALUES (
  'Gorgeous Habesha Dress Handwoven Habesha Kemis Modern Habesha Libs Eritrean Dress',
  309.99,
  'https://eftwxcqecemhuvobwvtb.supabase.co/storage/v1/object/sign/product-images/simple-dress2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM0NmJjMzEzLWQwMjItNDU3My1hY2EzLThjNTFmMDRlMDI1ZSJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy9zaW1wbGUtZHJlc3MyLnBuZyIsImlhdCI6MTc0NjcyMDYxMSwiZXhwIjoxNzc4MjU2NjExfQ.ZA-XLGdUSSOPgDthJj8-ZjNk7sd3fhaBwCCeIlmgueU',
  'Dresses',
  'Simple Dresses',
  'Modern',
  TRUE,
  FALSE,
  NULL,
  15,
  'A gorgeous handwoven Habesha Kemis with modern style.',
  '2025-05-08T12:00:00Z',
  '2025-05-08T12:00:00Z'
);

-- Product 9: Chic Habesha Kemis with Black and Pink Cross Designs Ethiopian Dress Style
INSERT INTO products (
  name, price, image, category, subcategory, design_type, 
  is_new_arrival, is_sale, sale_price, stock, description, created_at, updated_at
) VALUES (
  'Chic Habesha Kemis with Black and Pink Cross Designs Ethiopian Dress Style',
  259.99,
  'https://eftwxcqecemhuvobwvtb.supabase.co/storage/v1/object/sign/product-images/simple-dress3.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM0NmJjMzEzLWQwMjItNDU3My1hY2EzLThjNTFmMDRlMDI1ZSJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy9zaW1wbGUtZHJlc3MzLnBuZyIsImlhdCI6MTc0NjcyMDY0NSwiZXhwIjoxNzc4MjU2NjQ1fQ.EeKBW4sjj-ZsJ6f2nsOTxgQxWTEH56Q-NkCXEin64dU',
  'Dresses',
  'Simple Dresses',
  'Traditional',
  FALSE,
  FALSE,
  NULL,
  10,
  'A chic Habesha Kemis with black and pink cross designs.',
  '2025-05-08T12:00:00Z',
  '2025-05-08T12:00:00Z'
);

-- Product 10: Ethiopian Essence Habesha Kemis Simplistic Menen Fabric Habesha Dress
-- INSERT INTO products (
--   name, price, image, category, subcategory, design_type, 
--   is_new_arrival, is_sale, sale_price, stock, description, created_at, updated_at
-- ) VALUES (
--   'Ethiopian Essence Habesha Kemis Simplistic Menen Fabric Habesha Dress',
--   299.99,
--   'https://eftwxcqecemhuvobwvtb.supabase.co/storage/v1/object/sign/product-images/simple-dress4.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM0NmJjMzEzLWQwMjItNDU3My1hY2EzLThjNTFmMDRlMDI1ZSJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy9zaW1wbGUtZHJlc3M0LnBuZyIsImlhdCI6MTc0NjcyMDY1OSwiZXhwIjoxNzc4MjU2NjU5fQ.XvPNjP3BzA3wckCnGgAKZSIZdEbc7xOWr4n9pTWB1m4',
--   'Dresses',
--   'Simple Dresses',
--   'Traditional',
--   TRUE,
--   FALSE,
--   NULL,
--   7,
--   'A simplistic Habesha Kemis made from Menen fabric.',
--   '2025-05-08T12:00:00Z',
--   '2025-05-08T12:00:00Z'
-- );

-- Product 11: Vibrant Red Tilf Design Habesha Dress Red Design Habesha Kemis
INSERT INTO products (
  name, price, image, category, subcategory, design_type, 
  is_new_arrival, is_sale, sale_price, stock, description, created_at, updated_at
) VALUES (
  'Vibrant Red Tilf Design Habesha Dress Red Design Habesha Kemis',
  289.99,
  'https://eftwxcqecemhuvobwvtb.supabase.co/storage/v1/object/sign/product-images/simple-dress5.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM0NmJjMzEzLWQwMjItNDU3My1hY2EzLThjNTFmMDRlMDI1ZSJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy9zaW1wbGUtZHJlc3M1LnBuZyIsImlhdCI6MTc0NjcyMDY3NywiZXhwIjoxNzc4MjU2Njc3fQ.rhn9BvaUOU_yiRwHkX5c1kquFXTrBtRfwPsyHLwfBeI',
  'Dresses',
  'Simple Dresses',
  'Modern',
  FALSE,
  TRUE,
  260.99,
  10,
  'A vibrant red Tilf design Habesha dress. On sale!',
  '2025-05-08T12:00:00Z',
  '2025-05-08T12:00:00Z'
);

-- Product 12: Regal Charm Dark Green Tilet Cultural Habesha Dress with Handwoven Details
INSERT INTO products (
  name, price, image, category, subcategory, design_type, 
  is_new_arrival, is_sale, sale_price, stock, description, created_at, updated_at
) VALUES (
  'Regal Charm Dark Green Tilet Cultural Habesha Dress with Handwoven Details',
  259.99,
  'https://eftwxcqecemhuvobwvtb.supabase.co/storage/v1/object/sign/product-images/simple-dress6.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM0NmJjMzEzLWQwMjItNDU3My1hY2EzLThjNTFmMDRlMDI1ZSJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy9zaW1wbGUtZHJlc3M2LnBuZyIsImlhdCI6MTc0NjcyMDcxMCwiZXhwIjoxNzc4MjU2NzEwfQ.KJMRUtcuF8YJd6YC9l9ZqOP1NqKTrT01Ys8DkUfZj4U',
  'Dresses',
  'Simple Dresses',
  'Traditional',
  FALSE,
  FALSE,
  NULL,
  18,
  'A regal dark green Tilet Habesha dress with handwoven details.',
  '2025-05-08T12:00:00Z',
  '2025-05-08T12:00:00Z'
);

-- Product 13: Elegant Ethiopian Habesha Dress with Red & Gold Embroidery for Celebrations
INSERT INTO products (
  name, price, image, category, subcategory, design_type, 
  is_new_arrival, is_sale, sale_price, stock, description, created_at, updated_at
) VALUES (
  'Elegant Ethiopian Habesha Dress with Red & Gold Embroidery for Celebrations',
  526.99,
  'https://eftwxcqecemhuvobwvtb.supabase.co/storage/v1/object/sign/product-images/wedding-dress1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM0NmJjMzEzLWQwMjItNDU3My1hY2EzLThjNTFmMDRlMDI1ZSJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy93ZWRkaW5nLWRyZXNzMS5wbmciLCJpYXQiOjE3NDY3MjA3NDgsImV4cCI6MTc3ODI1Njc0OH0.EZxZd8QTVVK8csTzxkxmDzAHGuqG82rjWmuSTTrmGzk',
  'Dresses',
  'Wedding Dresses',
  'Traditional',
  TRUE,
  FALSE,
  NULL,
  3,
  'An elegant Ethiopian Habesha dress with red and gold embroidery for wedding celebrations.',
  '2025-05-08T12:00:00Z',
  '2025-05-08T12:00:00Z'
);

-- Product 14: A Bride’s Bold Elegance: Radiant Red Habesha Dress with Golden Embroidery Glow
INSERT INTO products (
  name, price, image, category, subcategory, design_type, 
  is_new_arrival, is_sale, sale_price, stock, description, created_at, updated_at
) VALUES (
  'A Bride’s Bold Elegance: Radiant Red Habesha Dress with Golden Embroidery Glow',
  582.99,
  'https://eftwxcqecemhuvobwvtb.supabase.co/storage/v1/object/sign/product-images/wedding-dress2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM0NmJjMzEzLWQwMjItNDU3My1hY2EzLThjNTFmMDRlMDI1ZSJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy93ZWRkaW5nLWRyZXNzMi5wbmciLCJpYXQiOjE3NDY3MjA3NjUsImV4cCI6MTc3ODI1Njc2NX0.5b0vy8xE5PEmd_lKSsdbEiBHO3U-AZpmnaiOh-FWKlA',
  'Dresses',
  'Wedding Dresses',
  'Modern',
  FALSE,
  FALSE,
  NULL,
  2,
  'A radiant red Habesha dress with golden embroidery for the bold bride.',
  '2025-05-08T12:00:00Z',
  '2025-05-08T12:00:00Z'
);

-- Product 15: Make a Statement in Green & Gold: Vibrant Habesha Kemis for Joyful Occasions
INSERT INTO products (
  name, price, image, category, subcategory, design_type, 
  is_new_arrival, is_sale, sale_price, stock, description, created_at, updated_at
) VALUES (
  'Make a Statement in Green & Gold: Vibrant Habesha Kemis for Joyful Occasions',
  534.99,
  'https://eftwxcqecemhuvobwvtb.supabase.co/storage/v1/object/sign/product-images/wedding-dress3.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM0NmJjMzEzLWQwMjItNDU3My1hY2EzLThjNTFmMDRlMDI1ZSJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy93ZWRkaW5nLWRyZXNzMy5wbmciLCJpYXQiOjE3NDY3MjA3ODcsImV4cCI6MTc3ODI1Njc4N30.DMmQCTTiD8T8vvE1hhjStiefUNSUuPf4zgej_r1IHNk',
  'Dresses',
  'Wedding Dresses',
  'Traditional',
  TRUE,
  FALSE,
  NULL,
  0,
  'A vibrant green and gold Habesha Kemis for joyful wedding occasions.',
  '2025-05-08T12:00:00Z',
  '2025-05-08T12:00:00Z'
);

-- Product 16: Golden Habesha Wedding Dress with Veil: Perfect for Your Special Day
INSERT INTO products (
  name, price, image, category, subcategory, design_type, 
  is_new_arrival, is_sale, sale_price, stock, description, created_at, updated_at
) VALUES (
  'Golden Habesha Wedding Dress with Veil: Perfect for Your Special Day',
  615.99,
  'https://eftwxcqecemhuvobwvtb.supabase.co/storage/v1/object/sign/product-images/wedding-dress4.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM0NmJjMzEzLWQwMjItNDU3My1hY2EzLThjNTFmMDRlMDI1ZSJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy93ZWRkaW5nLWRyZXNzNC5wbmciLCJpYXQiOjE3NDY3MjA4MDksImV4cCI6MTc3ODI1NjgwOX0.pbOoIcwtMZDK_K91TVn_LB4-PfPsBcch3Z6qH_cVEyc',
  'Dresses',
  'Wedding Dresses',
  'Traditional',
  FALSE,
  TRUE,
  554.39,
  10,
  'A golden Habesha wedding dress with veil, perfect for your special day. On sale!',
  '2025-05-08T12:00:00Z',
  '2025-05-08T12:00:00Z'
);

-- Product 17: Soft Elegance in Every Thread: Lavender Habesha Kemis with Flattering V-Waist
INSERT INTO products (
  name, price, image, category, subcategory, design_type, 
  is_new_arrival, is_sale, sale_price, stock, description, created_at, updated_at
) VALUES (
  'Soft Elegance in Every Thread: Lavender Habesha Kemis with Flattering V-Waist',
  566.99,
  'https://eftwxcqecemhuvobwvtb.supabase.co/storage/v1/object/sign/product-images/wedding-dress5.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM0NmJjMzEzLWQwMjItNDU3My1hY2EzLThjNTFmMDRlMDI1ZSJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy93ZWRkaW5nLWRyZXNzNS5wbmciLCJpYXQiOjE3NDY3MjA4NTcsImV4cCI6MTc3ODI1Njg1N30.zWYAk-xPLQj7de-ltbgxAZuCp3MiUCshwGpzVvE-hvs',
  'Dresses',
  'Wedding Dresses',
  'Modern',
  TRUE,
  FALSE,
  NULL,
  6,
  'A lavender Habesha Kemis with a flattering V-waist for soft elegance.',
  '2025-05-08T12:00:00Z',
  '2025-05-08T12:00:00Z'
);

-- Product 18: Effortlessly Elegant Dazzling Gold Habesha Kemis Stunning Ethiopian Attire
INSERT INTO products (
  name, price, image, category, subcategory, design_type, 
  is_new_arrival, is_sale, sale_price, stock, description, created_at, updated_at
) VALUES (
  'Effortlessly Elegant Dazzling Gold Habesha Kemis Stunning Ethiopian Attire',
  687.99,
  'https://eftwxcqecemhuvobwvtb.supabase.co/storage/v1/object/sign/product-images/wedding-dress6.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM0NmJjMzEzLWQwMjItNDU3My1hY2EzLThjNTFmMDRlMDI1ZSJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy93ZWRkaW5nLWRyZXNzNi5wbmciLCJpYXQiOjE3NDY3MjA4ODQsImV4cCI6MTc3ODI1Njg4NH0.aRvmW_jO6J9RHqYE8weqEe2z4LuTVA5HYlr-FzE9g9E',
  'Dresses',
  'Wedding Dresses',
  'Traditional',
  FALSE,
  FALSE,
  NULL,
  2,
  'An effortlessly elegant dazzling gold Habesha Kemis for stunning wedding attire.',
  '2025-05-08T12:00:00Z',
  '2025-05-08T12:00:00Z'
);

-- Product 19: Elegant Ethiopian Coffee Dress with Traditional Charm Simple Coffee Dress Habesha Dress
INSERT INTO products (
  name, price, image, category, subcategory, design_type, 
  is_new_arrival, is_sale, sale_price, stock, description, created_at, updated_at
) VALUES (
  'Elegant Ethiopian Coffee Dress with Traditional Charm Simple Coffee Dress Habesha Dress',
  169.99,
  'https://eftwxcqecemhuvobwvtb.supabase.co/storage/v1/object/sign/product-images/coffee-dress1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM0NmJjMzEzLWQwMjItNDU3My1hY2EzLThjNTFmMDRlMDI1ZSJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy9jb2ZmZWUtZHJlc3MxLnBuZyIsImlhdCI6MTc0NjcyMDkwOSwiZXhwIjoxNzc4MjU2OTA5fQ.ss0Ex6BgVqkUFQptYNKwspm-YGC4zBvhPUchWsHijNY',
  'Dresses',
  'Coffee Dresses',
  'Traditional',
  TRUE,
  FALSE,
  NULL,
  15,
  'An elegant Ethiopian coffee dress with traditional charm.',
  '2025-05-08T12:00:00Z',
  '2025-05-08T12:00:00Z'
);

-- Product 20: Gorgeous Ethiopian Coffee Dress with a Blend of Tradition and Modern Elegance
INSERT INTO products (
  name, price, image, category, subcategory, design_type, 
  is_new_arrival, is_sale, sale_price, stock, description, created_at, updated_at
) VALUES (
  'Gorgeous Ethiopian Coffee Dress with a Blend of Tradition and Modern Elegance',
  169.99,
  'https://eftwxcqecemhuvobwvtb.supabase.co/storage/v1/object/sign/product-images/coffee-dress2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM0NmJjMzEzLWQwMjItNDU3My1hY2EzLThjNTFmMDRlMDI1ZSJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy9jb2ZmZWUtZHJlc3MyLnBuZyIsImlhdCI6MTc0NjcyMDkzMiwiZXhwIjoxNzc4MjU2OTMyfQ.pvaVRjsxFzW4LPJvTiGyylV9EnqFZdOQkx_RjpCCFbI',
  'Dresses',
  'Coffee Dresses',
  'Modern',
  FALSE,
  FALSE,
  NULL,
  20,
  'A gorgeous Ethiopian coffee dress blending tradition and modern elegance.',
  '2025-05-08T12:00:00Z',
  '2025-05-08T12:00:00Z'
);

-- Product 21: Long Beautiful Traditional Habesha Coffee Dress with Timeless Grace
INSERT INTO products (
  name, price, image, category, subcategory, design_type, 
  is_new_arrival, is_sale, sale_price, stock, description, created_at, updated_at
) VALUES (
  'Long Beautiful Traditional Habesha Coffee Dress with Timeless Grace',
  169.99,
  'https://eftwxcqecemhuvobwvtb.supabase.co/storage/v1/object/sign/product-images/coffee-dress3.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM0NmJjMzEzLWQwMjItNDU3My1hY2EzLThjNTFmMDRlMDI1ZSJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy9jb2ZmZWUtZHJlc3MzLnBuZyIsImlhdCI6MTc0NjcyMDk1NCwiZXhwIjoxNzc4MjU2OTU0fQ.S707H5JjWdHDLPaXIoweidyKBZ4u-Uqlz4jLcWvip_s',
  'Dresses',
  'Coffee Dresses',
  'Traditional',
  TRUE,
  TRUE,
  152.99,
  10,
  'A long beautiful traditional Habesha coffee dress with timeless grace. On sale!',
  '2025-05-08T12:00:00Z',
  '2025-05-08T12:00:00Z'
);

-- Product 22: Radiant Yellow Free-Size Habesha Coffee Dress with Cultural Elegance
INSERT INTO products (
  name, price, image, category, subcategory, design_type, 
  is_new_arrival, is_sale, sale_price, stock, description, created_at, updated_at
) VALUES (
  'Radiant Yellow Free-Size Habesha Coffee Dress with Cultural Elegance',
  169.99,
  'https://eftwxcqecemhuvobwvtb.supabase.co/storage/v1/object/sign/product-images/coffee-dress4.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM0NmJjMzEzLWQwMjItNDU3My1hY2EzLThjNTFmMDRlMDI1ZSJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy9jb2ZmZWUtZHJlc3M0LnBuZyIsImlhdCI6MTc0NjcyMDk3NSwiZXhwIjoxNzc4MjU2OTc1fQ.evRwkPQhnuMXvVCkA4sjwN5S23Z6Ilt3YslQ9G1-j9U',
  'Dresses',
  'Coffee Dresses',
  'Modern',
  FALSE,
  FALSE,
  NULL,
  25,
  'A radiant yellow free-size Habesha coffee dress with cultural elegance.',
  '2025-05-08T12:00:00Z',
  '2025-05-08T12:00:00Z'
);

-- Product 23: Modern Habesha Couple Outfit with Lavender Details and Front V Design for Cultural Events
INSERT INTO products (
  name, price, image, category, design_type, 
  is_new_arrival, is_sale, sale_price, stock, description, created_at, updated_at
) VALUES (
  'Modern Habesha Couple Outfit with Lavender Details and Front V Design for Cultural Events',
  393.99,
  'https://eftwxcqecemhuvobwvtb.supabase.co/storage/v1/object/sign/product-images/couple1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM0NmJjMzEzLWQwMjItNDU3My1hY2EzLThjNTFmMDRlMDI1ZSJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy9jb3VwbGUxLnBuZyIsImlhdCI6MTc0NjcyMTAwMSwiZXhwIjoxNzc4MjU3MDAxfQ.izgkvev_I42h3wEacZdmbTyje8j8MAHKB4TXIoGAjVk',
  'Couples',
  'Modern',
  FALSE,
  FALSE,
  NULL,
  8,
  'A modern Habesha couple outfit with lavender details for cultural events.',
  '2025-05-08T12:00:00Z',
  '2025-05-08T12:00:00Z'
);

-- Product 24: Elegant Habesha Couple Outfit with Soft Lavender Embroidery for Ethiopian Weddings
INSERT INTO products (
  name, price, image, category, design_type, 
  is_new_arrival, is_sale, sale_price, stock, description, created_at, updated_at
) VALUES (
  'Elegant Habesha Couple Outfit with Soft Lavender Embroidery for Ethiopian Weddings',
  504.99,
  'https://eftwxcqecemhuvobwvtb.supabase.co/storage/v1/object/sign/product-images/couple2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM0NmJjMzEzLWQwMjItNDU3My1hY2EzLThjNTFmMDRlMDI1ZSJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy9jb3VwbGUyLnBuZyIsImlhdCI6MTc0NjcyMTAxNCwiZXhwIjoxNzc4MjU3MDE0fQ.FrsN0_p7Tldf9Vlar5RmkuWjOAdbvaF9-kVCD4o64OE',
  'Couples',
  'Traditional',
  TRUE,
  FALSE,
  NULL,
  4,
  'An elegant Habesha couple outfit with soft lavender embroidery for weddings.',
  '2025-05-08T12:00:00Z',
  '2025-05-08T12:00:00Z'
);

-- Product 25: Striking Couple's Habesha Dress Set with Bold Red, Pink & Gold Embroidery
INSERT INTO products (
  name, price, image, category, design_type, 
  is_new_arrival, is_sale, sale_price, stock, description, created_at, updated_at
) VALUES (
  'Striking Couple''s Habesha Dress Set with Bold Red, Pink & Gold Embroidery',
  589.99,
  'https://eftwxcqecemhuvobwvtb.supabase.co/storage/v1/object/sign/product-images/couple3.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM0NmJjMzEzLWQwMjItNDU3My1hY2EzLThjNTFmMDRlMDI1ZSJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy9jb3VwbGUzLnBuZyIsImlhdCI6MTc0NjcyMTAzMCwiZXhwIjoxNzc4MjU3MDMwfQ.GmX6PHTSJ2KknQecOWulkYY4zTqYwbIwWQFd0IrOAIc',
  'Couples',
  'Traditional',
  FALSE,
  TRUE,
  530.99,
  2,
  'A striking couple''s Habesha dress set with bold red, pink, and gold embroidery. On sale!',
  '2025-05-08T12:00:00Z',
  '2025-05-08T12:00:00Z'
);

-- Product 26: Vibrant Blue Habesha Couple's Attire with Intricate Detailed Design
INSERT INTO products (
  name, price, image, category, design_type, 
  is_new_arrival, is_sale, sale_price, stock, description, created_at, updated_at
) VALUES (
  'Vibrant Blue Habesha Couple''s Attire with Intricate Detailed Design',
  799.99,
  'https://eftwxcqecemhuvobwvtb.supabase.co/storage/v1/object/sign/product-images/couple4.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM0NmJjMzEzLWQwMjItNDU3My1hY2EzLThjNTFmMDRlMDI1ZSJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy9jb3VwbGU0LnBuZyIsImlhdCI6MTc0NjcyMTA0MywiZXhwIjoxNzc4MjU3MDQzfQ.Nxyh6iS8-W1GclXgbaDBmfW3-qKpm4ti4XsoFbO_nVk',
  'Couples',
  'Modern',
  TRUE,
  FALSE,
  NULL,
  10,
  'A vibrant blue Habesha couple''s attire with intricate detailed design.',
  '2025-05-08T12:00:00Z',
  '2025-05-08T12:00:00Z'
);

-- Product 27: Flawless Green Habesha Couples Wedding Outfit with Golden Accents
INSERT INTO products (
  name, price, image, category, design_type, 
  is_new_arrival, is_sale, sale_price, stock, description, created_at, updated_at
) VALUES (
  'Flawless Green Habesha Couples Wedding Outfit with Golden Accents',
  589.99,
  'https://eftwxcqecemhuvobwvtb.supabase.co/storage/v1/object/sign/product-images/couple5.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM0NmJjMzEzLWQwMjItNDU3My1hY2EzLThjNTFmMDRlMDI1ZSJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy9jb3VwbGU1LnBuZyIsImlhdCI6MTc0NjcyMTA2MywiZXhwIjoxNzc4MjU3MDYzfQ._KJhb7GHr17GsO89efqhkJyQ2bIYUxe8m2l892JQB90',
  'Couples',
  'Traditional',
  FALSE,
  FALSE,
  NULL,
  5,
  'A flawless green Habesha couples wedding outfit with golden accents.',
  '2025-05-08T12:00:00Z',
  '2025-05-08T12:00:00Z'
);

-- Product 28: Red Habesha Couples Wedding Attire Intricate Handcrafted Design
INSERT INTO products (
  name, price, image, category, design_type, 
  is_new_arrival, is_sale, sale_price, stock, description, created_at, updated_at
) VALUES (
  'Red Habesha Couples Wedding Attire Intricate Handcrafted Design',
  739.99,
  'https://eftwxcqecemhuvobwvtb.supabase.co/storage/v1/object/sign/product-images/couple6.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM0NmJjMzEzLWQwMjItNDU3My1hY2EzLThjNTFmMDRlMDI1ZSJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy9jb3VwbGU2LnBuZyIsImlhdCI6MTc0NjcyMTA5MCwiZXhwIjoxNzc4MjU3MDkwfQ.xfVChNiVCWZFCmNq0p4Q8T9DMjKtE7j7-Uk0bwYTBW4',
  'Couples',
  'Traditional',
  TRUE,
  FALSE,
  NULL,
  3,
  'A red Habesha couples wedding attire with intricate handcrafted design.',
  '2025-05-08T12:00:00Z',
  '2025-05-08T12:00:00Z'
);

-- Product 29: Habesha Couple's Outfit Contemporary Design Ethiopian Style
INSERT INTO products (
  name, price, image, category, design_type, 
  is_new_arrival, is_sale, sale_price, stock, description, created_at, updated_at
) VALUES (
  'Habesha Couple''s Outfit Contemporary Design Ethiopian Style',
  679.99,
  'https://eftwxcqecemhuvobwvtb.supabase.co/storage/v1/object/sign/product-images/couple7.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM0NmJjMzEzLWQwMjItNDU3My1hY2EzLThjNTFmMDRlMDI1ZSJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy9jb3VwbGU3LnBuZyIsImlhdCI6MTc0NjcyMTEwOCwiZXhwIjoxNzc4MjU3MTA4fQ.bizUU21EZon_-n0t6vLXMgAPLkzBr_MZ6rHJGAqiuMo',
  'Couples',
  'Modern',
  FALSE,
  TRUE,
  611.99,
  10,
  'A contemporary Habesha couple''s outfit in Ethiopian style. On sale!',
  '2025-05-08T12:00:00Z',
  '2025-05-08T12:00:00Z'
);

-- Product 30: Glamorous Light Pink Habesha Wedding Outfit with Matching Couple Design
INSERT INTO products (
  name, price, image, category, design_type, 
  is_new_arrival, is_sale, sale_price, stock, description, created_at, updated_at
) VALUES (
  'Glamorous Light Pink Habesha Wedding Outfit with Matching Couple Design',
  599.99,
  'https://eftwxcqecemhuvobwvtb.supabase.co/storage/v1/object/sign/product-images/couple8.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM0NmJjMzEzLWQwMjItNDU3My1hY2EzLThjNTFmMDRlMDI1ZSJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy9jb3VwbGU4LnBuZyIsImlhdCI6MTc0NjcyMTEyNCwiZXhwIjoxNzc4MjU3MTI0fQ.HAkmAybcvcYcuIHyhAAmy2OP8zQUukivNrYfZJQ_7AQ',
  'Couples',
  'Modern',
  TRUE,
  FALSE,
  NULL,
  6,
  'A glamorous light pink Habesha wedding outfit with matching couple design.',
  '2025-05-08T12:00:00Z',
  '2025-05-08T12:00:00Z'
);

-- Product 31: Golden Tilet Habesha Wedding Dress: A Breathtaking Design for the Perfect Couple
INSERT INTO products (
  name, price, image, category, design_type, 
  is_new_arrival, is_sale, sale_price, stock, description, created_at, updated_at
) VALUES (
  'Golden Tilet Habesha Wedding Dress: A Breathtaking Design for the Perfect Couple',
  619.99,
  'https://eftwxcqecemhuvobwvtb.supabase.co/storage/v1/object/sign/product-images/couple9.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM0NmJjMzEzLWQwMjItNDU3My1hY2EzLThjNTFmMDRlMDI1ZSJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy9jb3VwbGU5LnBuZyIsImlhdCI6MTc0NjcyMTE5NCwiZXhwIjoxNzc4MjU3MTk0fQ.XQ99qeP8D-AL_rKXwYTVEdRQ2TNtWbtqtt3EzrW-0C8',
  'Couples',
  'Traditional',
  FALSE,
  FALSE,
  NULL,
  4,
  'A breathtaking golden Tilet Habesha wedding dress for the perfect couple.',
  '2025-05-08T12:00:00Z',
  '2025-05-08T12:00:00Z'
);

-- Product 32: Hand Woven Habesha Shirt For Men Complete Men's Outfit With Shoes
INSERT INTO products (
  name, price, image, category, design_type, 
  is_new_arrival, is_sale, sale_price, stock, description, created_at, updated_at
) VALUES (
  'Hand Woven Habesha Shirt For Men Complete Men''s Outfit With Shoes',
  119.99,
  'https://eftwxcqecemhuvobwvtb.supabase.co/storage/v1/object/sign/product-images/men1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM0NmJjMzEzLWQwMjItNDU3My1hY2EzLThjNTFmMDRlMDI1ZSJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy9tZW4xLnBuZyIsImlhdCI6MTc0NjcyMTM3MywiZXhwIjoxNzc4MjU3MzczfQ.uMuGQOfMc8SI82EmxFkxGlG5M4gNS-8THbuLxN0VF34',
  'Mens',
  'Traditional',
  TRUE,
  FALSE,
  NULL,
  12,
  'A hand-woven Habesha shirt for men, complete with shoes.',
  '2025-05-08T12:00:00Z',
  '2025-05-08T12:00:00Z'
);

-- Product 33: Modern Habesha Shirt For Men Habesha Libs Ethiopian Cloth Simple Habesha Shirt
INSERT INTO products (
  name, price, image, category, design_type, 
  is_new_arrival, is_sale, sale_price, stock, description, created_at, updated_at
) VALUES (
  'Modern Habesha Shirt For Men Habesha Libs Ethiopian Cloth Simple Habesha Shirt',
  119.99,
  'https://eftwxcqecemhuvobwvtb.supabase.co/storage/v1/object/sign/product-images/men2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM0NmJjMzEzLWQwMjItNDU3My1hY2EzLThjNTFmMDRlMDI1ZSJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy9tZW4yLnBuZyIsImlhdCI6MTc0NjcyMTM5OCwiZXhwIjoxNzc4MjU3Mzk4fQ.cgPIDpoHpBjLPDB9nrP7UQadB9F6dUOpELVBaGjsevU',
  'Mens',
  'Modern',
  FALSE,
  FALSE,
  NULL,
  15,
  'A modern Habesha shirt for men made from Ethiopian cloth.',
  '2025-05-08T12:00:00Z',
  '2025-05-08T12:00:00Z'
);

-- Product 34: A Simple Modern Ethiopian Traditional Shirt for Men With Yellow Tilf
INSERT INTO products (
  name, price, image, category, design_type, 
  is_new_arrival, is_sale, sale_price, stock, description, created_at, updated_at
) VALUES (
  'A Simple Modern Ethiopian Traditional Shirt for Men With Yellow Tilf',
  139.99,
  'https://eftwxcqecemhuvobwvtb.supabase.co/storage/v1/object/sign/product-images/men3.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM0NmJjMzEzLWQwMjItNDU3My1hY2EzLThjNTFmMDRlMDI1ZSJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy9tZW4zLnBuZyIsImlhdCI6MTc0NjcyMTQxMiwiZXhwIjoxNzc4MjU3NDEyfQ.T_GqN7p0_VdefkztjhEhEB4nCQG9ogu3x3oyIkB-5O4',
  'Mens',
  'Modern',
  TRUE,
  TRUE,
  125.99,
  8,
  'A simple modern Ethiopian traditional shirt for men with yellow Tilf. On sale!',
  '2025-05-08T12:00:00Z',
  '2025-05-08T12:00:00Z'
);

-- Product 35: A Complete Traditional Ethiopian Outfit for Men with Shoes
INSERT INTO products (
  name, price, image, category, design_type, 
  is_new_arrival, is_sale, sale_price, stock, description, created_at, updated_at
) VALUES (
  'A Complete Traditional Ethiopian Outfit for Men with Shoes',
  199.99,
  'https://eftwxcqecemhuvobwvtb.supabase.co/storage/v1/object/sign/product-images/men4.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM0NmJjMzEzLWQwMjItNDU3My1hY2EzLThjNTFmMDRlMDI1ZSJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy9tZW40LnBuZyIsImlhdCI6MTc0NjcyMTQyNywiZXhwIjoxNzc4MjU3NDI3fQ.WpevIDSuXO80ZaST9jokfwfb1B-l4lBsfx0ry06NI8E',
  'Mens',
  'Traditional',
  FALSE,
  FALSE,
  NULL,
  10,
  'A complete traditional Ethiopian outfit for men with shoes.',
  '2025-05-08T12:00:00Z',
  '2025-05-08T12:00:00Z'
);

-- Product 36: Graceful Traditional Ethiopian Shirt for Men with Black and Golden Embroidery
INSERT INTO products (
  name, price, image, category, design_type, 
  is_new_arrival, is_sale, sale_price, stock, description, created_at, updated_at
) VALUES (
  'Graceful Traditional Ethiopian Shirt for Men with Black and Golden Embroidery',
  129.99,
  'https://eftwxcqecemhuvobwvtb.supabase.co/storage/v1/object/sign/product-images/men5.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM0NmJjMzEzLWQwMjItNDU3My1hY2EzLThjNTFmMDRlMDI1ZSJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy9tZW41LnBuZyIsImlhdCI6MTc0NjcyMTQ0MCwiZXhwIjoxNzc4MjU3NDQwfQ.ObTFnVuCkNWOKQ2SLI6PNJBq1N8wHInOMjNHcOnc5EU',
  'Mens',
  'Traditional',
  TRUE,
  FALSE,
  NULL,
  14,
  'A graceful traditional Ethiopian shirt for men with black and golden embroidery.',
  '2025-05-08T12:00:00Z',
  '2025-05-08T12:00:00Z'
);

-- Product 37: Jano: Red Tilet Elegance in Habesha Men's Fashion
INSERT INTO products (
  name, price, image, category, design_type, 
  is_new_arrival, is_sale, sale_price, stock, description, created_at, updated_at
) VALUES (
  'Jano: Red Tilet Elegance in Habesha Men''s Fashion',
  199.99,
  'https://eftwxcqecemhuvobwvtb.supabase.co/storage/v1/object/sign/product-images/men6.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM0NmJjMzEzLWQwMjItNDU3My1hY2EzLThjNTFmMDRlMDI1ZSJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy9tZW42LnBuZyIsImlhdCI6MTc0NjcyMTUzNywiZXhwIjoxNzc4MjU3NTM3fQ.S05bKrG13IG3sNjKHjKUnhMSSuAFoiUjUYSEhi12tgw',
  'Mens',
  'Modern',
  FALSE,
  TRUE,
  179.99,
  5,
  'A red Tilet Habesha men''s shirt with elegant design. On sale!',
  '2025-05-08T12:00:00Z',
  '2025-05-08T12:00:00Z'
);

-- Product 38: Golden Threads of Tradition: Simple Red Habesha Men's Shirt in Pisi Fabric
INSERT INTO products (
  name, price, image, category, design_type, 
  is_new_arrival, is_sale, sale_price, stock, description, created_at, updated_at
) VALUES (
  'Golden Threads of Tradition: Simple Red Habesha Men''s Shirt in Pisi Fabric',
  219.99,
  'https://eftwxcqecemhuvobwvtb.supabase.co/storage/v1/object/sign/product-images/men7.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM0NmJjMzEzLWQwMjItNDU3My1hY2EzLThjNTFmMDRlMDI1ZSJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy9tZW47LnBuZyIsImlhdCI6MTc0NjcyMTQ4NSwiZXhwIjoxNzc4MjU3NDg1fQ.3wPKbebh6DuLoksqVHjdbYXaC7zH4GdzfATSeE406ME',
  'Mens',
  'Traditional',
  TRUE,
  FALSE,
  NULL,
  7,
  'A simple red Habesha men''s shirt with golden threads in Pisi fabric.',
  '2025-05-08T12:00:00Z',
  '2025-05-08T12:00:00Z'
);

-- Product 39: Gorgeous Brown Design Habesha Men's Shirt Modern Habesha Shirt
INSERT INTO products (
  name, price, image, category, design_type, 
  is_new_arrival, is_sale, sale_price, stock, description, created_at, updated_at
) VALUES (
  'Gorgeous Brown Design Habesha Men''s Shirt Modern Habesha Shirt',
  129.99,
  'https://eftwxcqecemhuvobwvtb.supabase.co/storage/v1/object/sign/product-images/men8.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM0NmJjMzEzLWQwMjItNDU3My1hY2EzLThjNTFmMDRlMDI1ZSJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy9tZW44LnBuZyIsImlhdCI6MTc0NjcyMTUwMCwiZXhwIjoxNzc4MjU3NTAwfQ.2xQ5iY2lQfV2c5r8v3D2g6fP6hN8M9L7kJ8O9P0Q1R',
  'Mens',
  'Modern',
  FALSE,
  FALSE,
  NULL,
  10,
  'A gorgeous brown design Habesha men''s shirt with modern style.',
  '2025-05-08T12:00:00Z',
  '2025-05-08T12:00:00Z'
);

-- Product 40: Handwoven Elegance: Traditional Habesha Men's Shirt with Golden Accents
INSERT INTO products (
  name, price, image, category, design_type, 
  is_new_arrival, is_sale, sale_price, stock, description, created_at, updated_at
) VALUES (
  'Handwoven Elegance: Traditional Habesha Men''s Shirt with Golden Accents',
  149.99,
  'https://eftwxcqecemhuvobwvtb.supabase.co/storage/v1/object/sign/product-images/men9.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM0NmJjMzEzLWQwMjItNDU3My1hY2EzLThjNTFmMDRlMDI1ZSJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy9tZW45LnBuZyIsImlhdCI6MTc0NjcyMTUyMCwiZXhwIjoxNzc4MjU3NTIwfQ.3yX6jK7mL8P9Q0R1S2T3uV4wY5zN6bM7oJ8P9Q0R1S',
  'Mens',
  'Traditional',
  TRUE,
  FALSE,
  NULL,
  9,
  'A handwoven traditional Habesha men''s shirt with elegant golden accents.',
  '2025-05-08T12:00:00Z',
  '2025-05-08T12:00:00Z'
);