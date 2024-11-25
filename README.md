<<<<<<< HEAD

# Mini CRM Backend

This repository contains the backend services for the Mini CRM application, including the API backend and the consumer server. Both services are built using Node.js and utilize MongoDB for data storage and RabbitMQ (hosted on CloudAMQP) for message brokering.
=======
# Mini CRM API Backend

This repository contains the API backend for the Mini CRM application. The backend is built using Node.js, and it provides various services for data ingestion, campaign management, and delivery receipt processing.
>>>>>>> 906eb1c (Initial commit for backend project)

## Tech Stack

- **Backend Framework:** Node.js
- **Database:** MongoDB
- **Message Broker:** RabbitMQ (hosted on CloudAMQP)
- **Hosting:** Railway

<<<<<<< HEAD
## Projects

### 1. API Backend

The API backend provides various services for data ingestion, campaign management, vendor services, and delivery receipt processing.

#### Features

- **Data Ingestion:** APIs to ingest data into customer and orders database.
- **Campaign Management:** APIs to create and manage campaigns.
- **Vendor Service**: Sends personalised message for each customer.
- **Delivery Receipts:** Batch processing and handling delivery receipts via a pub-sub model.

For more details, please refer to the [README](api-backend/README.md) in the `api-backend` folder.

### 2. Consumer Server

The consumer server handles message consumption for data ingestion and delivery receipt processing.

#### Features

- **Data Ingestion Consumer:** Consumes messages for data ingestion into the database.
- **Delivery Receipts Consumer:** Processes delivery receipt messages and updates the database.

For more details, please refer to the [README](consumer-server/README.md) in the `consumer-server` folder.
=======
## Features

- **Data Ingestion:** APIs to ingest data into customer and orders database via queue.
- **Campaign Management:** APIs to create and manage campaigns.
- **Vendor Service**: Sends personalised campaigns messages to customers.
- **Delivery Receipts:** Batch processing and handling delivery receipts via a pub-sub model.

>>>>>>> 906eb1c (Initial commit for backend project)

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- MongoDB
- CloudAMQP account for RabbitMQ

### Installation

1. Clone the repository:
    ```bash
<<<<<<< HEAD
    git clone https://github.com/tanishqmethi2003/xeno-backend.git
    cd xeno-mini-crm-backend
    ```

2. Follow the instructions in the respective folders (`api-backend` and `consumer-server`) to set up and run each service.
=======
   
    cd xeno-mini-crm-backend
    cd api-backend
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3. Set up environment variables in `.env` file:
    ```plaintext
    MONGODB_URI=your-mongodb-uri
    RABBITMQ_URI=your-cloudamqp-uri
    ```

### Running the Application

1. Start the server:
    ```bash
    node app.js
    ```

2. The server will be running on `http://localhost:5000`.

>>>>>>> 906eb1c (Initial commit for backend project)
