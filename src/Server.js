import { createServer, Model } from "miragejs"

createServer({
  models: {
    vans: Model,
  },
  seeds(server) {
    server.create("van", { 
      id: "1", 
      name: "Modest Explorer", 
      price: 2300,
      description: "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior, and ample storage space, the Cruiser offers a beautiful view wherever you go.",
      imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png", 
      type: "luxury" 
    })
    server.create("van", { 
      id: "2",
      hostId:"123", 
      name: "Beach Bum", 
      price: 900,
      description: "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior, and ample storage space, the Cruiser offers a beautiful view wherever you go.", 
      imageUrl: "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png", 
      type: "cheap" 
    })
    server.create("van", { 
      id: "3", 
      name: "Reliable Red", 
      price: 1100,
      description: "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior, and ample storage space, the Cruiser offers a beautiful view wherever you go.",
      imageUrl: "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png", 
      type: "comfortable" 
    })

    server.create("van", { 
      id: "4", 
      hostId:"123",
      name: "Dreamfinder", 
      price: 1700,
      description: "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior, and ample storage space, the Cruiser offers a beautiful view wherever you go.",
      imageUrl: "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png", 
      type: "simple" 
    })
    server.create("van", { 
      id: "6", 
      name: "The Cruiser", 
      price: 1640,
      description: "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior, and ample storage space, the Cruiser offers a beautiful view wherever you go.", 
      imageUrl: "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png", 
      type: "luxury" 
    })
    server.create("van", { 
      id: "5", 
      hostId:"123",
      name: "Green Wonder", 
      price: 1400,
      description: "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior, and ample storage space, the Cruiser offers a beautiful view wherever you go.",
      imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", 
      type: "rugged" 
    })
  },
  routes() {
    this.namespace = "api"
    this.logging=false
    this.timing=2000;

    this.get('/vans', (schema, request) => {
      // return new Response(400,{},{error:"Error fetching data"})
       return schema.vans.all()
    })

    this.get('/vans/:id', (schema, request) => {
      const id = request.params.id
      return schema.vans.find(id)
    })
    
    this.get('/host/vans', (schema, request) => {
      return schema.vans.where({hostId:"123"})
    })

    this.get('/host/vans/:id', (schema, request) => {
      const id = request.params.id
      return schema.vans.findBy ({id,hostId:"123"})
    })

  }
})
