# Security Specification - Baiterek Basket

## 1. Data Invariants
- A Basket must always reference a valid Store.
- Only the owner of a Store can modify its details or its Baskets' stock status.
- Prices must be positive numbers.
- Discount price must be lower than original price.
- `ownerId` in Store must match the creator's UID.
- Users cannot change the `ownerId` of a store once set.

## 2. The "Dirty Dozen" Payloads (Deny List)
1. Creating a store with a different `ownerId` than the caller.
2. Updating a store's `name` if not the owner.
3. Updating a basket's `inStock` status if not the owner of the parent store.
4. Creating a basket with a negative `discountPrice`.
5. Creating a basket with `discountPrice` higher than `originalPrice`.
6. Injecting a 2MB string into `ingredients`.
7. Deleting a store as a random guest.
8. Modifying `ownerId` of an existing store.
9. Creating a basket with a non-alphanumeric `storeId`.
10. Listing all baskets without being signed in (requires generic read protection).
11. Updating a basket's `originalPrice` if only a guest or another store owner.
12. Creating a store with an empty `name`.

## 3. Test Cases (Mental Check)
- `create /stores/s1 { ownerId: "wrong" }` -> DENY
- `update /baskets/b1 { inStock: false }` where user is not store owner -> DENY
- `create /baskets/b2 { discountPrice: -10 }` -> DENY
- `create /stores/s2 { name: "" }` -> DENY
