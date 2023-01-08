import  ApiService  from './ApiService';
import CreateService from './CreateService';
import { expect, it } from "@jest/globals";

const sessionUser = {
        "id": 0,
        "firstName": "Susan",
        "lastName": "Taylor",
        "portraitUrl": "https://i.pravatar.cc/300?img=35",
}

const testRental = {
        type: "rentable",
        owner: sessionUser,
        title: "Jans luxury Cabin",
        description: "One of the most popular rentable cabin",
        heroUrl: "https://c.pxhere.com/photos/5f/c8/galleon_ship_moored_sail_vessel_nautical_transportation_boat-553557.jpg!d",
        featured: true
}
 
jest.mock('./ApiService', () => ({
  post() {
    return {
            featured: true,
            owner: sessionUser,
            type: "rentable",
            title: "Jans luxury Cabin",
            description: "One of the most popular rentable cabin",
            heroUrl: "https://c.pxhere.com/photos/5f/c8/galleon_ship_moored_sail_vessel_nautical_transportation_boat-553557.jpg!d"
    }
  }
}));
 
it('returns a instance', async () => {
  const response = await CreateService.post({
            type: "rentable",
            owner: sessionUser,
            title: "Jans luxury Cabin",
            description: "One of the most popular rentable cabin",
            heroUrl: "https://c.pxhere.com/photos/5f/c8/galleon_ship_moored_sail_vessel_nautical_transportation_boat-553557.jpg!d",
            featured: true
  });
  expect(response).toMatchObject(testRental);
});

