# Web 6 семестр
## Верещагин Андрей M33051
---

Entities:
1) User - Пользователь, зарегистрированный в нашей системе. Может иметь заказы, а также свои скидки (например, скидка на ДР и т.д.)
2) Discount - Скидка, которая может применяться к разным пользователям
3) Order - Заказ пользователя, который может содержать большое количество товаров
4) Good - Товар, имеющий свою цену и содержащийся во множестве заказов
5) GoodsInOrders и UserHaveDiscount - связующие сущности для пользователей, товаров и заказов