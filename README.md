# Small reference for React and Next.Js - Rentals Example

### Heading
 - next/head: Technology used for Headings
 
### Context
 - Context for a SessionUser is defined and provided (_app.tsx)
 - useContext() hook

### Next-Intl: Internationalistation
 - Configuration: NextIntlProvider (_app.tsx)
 - Provided in Components via useTranslations("...") hook
 - Link: https://next-intl-docs.vercel.app/docs/getting-started
 
 
### lowdbv4: Database
 - Configuration: creating an adapter (db.tsx), providing a db.json file
 - Read and Write operations are asynchronous
 - Link: https://github.com/typicode/lowdb

### Pages
 - using getServerSideProps in combination with a Promise
 
### Router
 - Router: used for Routing purposes
 - router.replace("/rooms?page=1")
 - onClick={() => { router.push(`/rooms?page=${page - 1}`); }}>
 
### Services
 - generic API service used in CreateService and StarredService
 - Create Service and Starred Service as simple classes
 
### APIs
 - rentable: used to save a new rental to lowdb
 - starred: used for clicking a star and saving to lowdb


### Utils
 - HttpError
 - submit-promise: handle the promise in a generic way

### Testing
 - Cypress
 - Jest


### Others
 - serialize-query-params
 - usePromised - a simple Promise Hook
 - radix-ui: A11y for the switch on the create page
 - heroicons: simple Icons
 - clsx and cx
 - http-status-codes
