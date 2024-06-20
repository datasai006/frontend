import React from "react";
import bmw from "../../assets/images/BMW.png";
import "../detail/cardetail.css";
const cardetails = [
  {
    id: 1,
    name: "Suzuki City",
    car_id: 14,
    image: bmw, // Use the actual path to the image
    model: "City",
    version: "V1",
    year: "2022",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "Honda City",
    car_id: 15,
    image: bmw, // Use the actual path to the image
    model: "City",
    version: "V2",
    year: "2023",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    id: 3,
    name: "Honda Accord",
    car_id: 16,
    image: bmw, // Use the actual path to the image
    model: "Accord",
    version: "V3",
    year: "2024",
    description:
      "Nulla facilisi. Ut fringilla augue nec libero tempor consequat.",
  },
  {
    id: 4,
    name: "Honda Accord",
    car_id: 16,
    image: bmw, // Use the actual path to the image
    model: "Accord",
    version: "V3",
    year: "2024",
    description:
      "Nulla facilisi. Ut fringilla augue nec libero tempor consequat.",
  },
  {
    id: 5,
    name: "Honda Accord",
    car_id: 16,
    image: bmw, // Use the actual path to the image
    model: "Accord",
    version: "V3",
    year: "2024",
    description:
      "Nulla facilisi. Ut fringilla augue nec libero tempor consequat.",
  },
  {
    id: 6,
    name: "Honda Accord",
    car_id: 16,
    image: bmw, // Use the actual path to the image
    model: "Accord",
    version: "V3",
    year: "2024",
    description:
      "Nulla facilisi. Ut fringilla augue nec libero tempor consequat.",
  },
  {
    id: 7,
    name: "Honda Accord",
    car_id: 16,
    image: bmw, // Use the actual path to the image
    model: "Accord",
    version: "V3",
    year: "2024",
    description:
      "Nulla facilisi. Ut fringilla augue nec libero tempor consequat.",
  },
  {
    id: 8,
    name: "Honda Accord",
    car_id: 16,
    image: bmw, // Use the actual path to the image
    model: "Accord",
    version: "V3",
    year: "2024",
    description:
      "Nulla facilisi. Ut fringilla augue nec libero tempor consequat.",
  },
  {
    id: 9,
    name: "Honda Accord",
    car_id: 16,
    image: bmw, // Use the actual path to the image
    model: "Accord",
    version: "V3",
    year: "2024",
    description:
      "Nulla facilisi. Ut fringilla augue nec libero tempor consequat.",
  },
  {
    id: 10,
    name: "Honda Accord",
    car_id: 16,
    image: bmw, // Use the actual path to the image
    model: "Accord",
    version: "V3",
    year: "2024",
    description:
      "Nulla facilisi. Ut fringilla augue nec libero tempor consequat.",
  },
  {
    id: 11,
    name: "Honda Accord",
    car_id: 16,
    image: bmw, // Use the actual path to the image
    model: "Accord",
    version: "V3",
    year: "2024",
    description:
      "Nulla facilisi. Ut fringilla augue nec libero tempor consequat.",
  },

  {
    id: 12,
    name: "Honda Accord",
    car_id: 16,
    image: bmw, // Use the actual path to the image
    model: "Accord",
    version: "V3",
    year: "2024",
    description:
      "Nulla facilisi. Ut fringilla augue nec libero tempor consequat.",
  },
];

const cardetail = () => {
  return (
    <div className="card-container">
      {cardetails.map((car) => (
        <div key={car.id} className="card_cad">
          <img src={car.image} alt={car.name} className="card-image" />
          <div className="card-details">
            <h2>{car.name}</h2>
            <p>
              <strong>Model:</strong> {car.model}
            </p>
            <p>
              <strong>Version:</strong> {car.version}
            </p>
            <p>
              <strong>Year:</strong> {car.year}
            </p>
            <p>{car.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default cardetail;
