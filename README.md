# Anime website

plan of action
use server state manager like tanstack or swr

1. Using zustand, nextjs fetch with caching, tailwind css v4, infinite scroll, lazy loading images
2. Authentication using clerk and stored in mongodb
3. More advanced filtration
4. Add to watchlist with dedicated page
5. Profile page
6. Category page
7. Minilist to full list of each category

Site map:

- Home
- Anime List
  - Anime Details (e.g., /anime/1, /anime/2, etc.)
- Search
- User Profile
- Login
- Register
- About
  About page will contain information regarding technologies used in site

add dynamic limit on api response based on device like, for desktop load 4-5 items, for mobile load 2-3 items

task for 25/02/2026

1. convert cardlist into a generic list
2. fix infinite loader flicker and no content issue

### My plan for generic card and cardlist along with infinite loading

1. create a compound card list component
