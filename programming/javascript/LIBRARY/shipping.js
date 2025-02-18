// Define the Package class
class Package {
    constructor(id, weight, destination) {
        this.id = id;
        this.weight = weight;
        this.destination = destination;
    }
}

// Define the Courier class
class Courier {
    constructor(id, name, vehicle) {
        this.id = id;
        this.name = name;
        this.vehicle = vehicle;
    }
}

// Define the Shipment class
class Shipment {
    constructor(id, packages, courier) {
        this.id = id;
        this.packages = packages;
        this.status = 'Pending';
        this.courier = courier;
    }

    updateStatus(newStatus) {
        this.status = newStatus;
    }
}

// Define the ShippingCompany class
class ShippingCompany {
    constructor() {
        this.packages = [];
        this.couriers = [];
        this.shipments = [];
    }

    addPackage(pkg) {
        this.packages.push(pkg);
    }

    registerCourier(courier) {
        this.couriers.push(courier);
    }

    createShipment(id, packageIds, courierId) {
        const shipmentPackages = this.packages.filter(pkg => packageIds.includes(pkg.id));
        const shipmentCourier = this.couriers.find(courier => courier.id === courierId);

        if (shipmentPackages.length && shipmentCourier) {
            const shipment = new Shipment(id, shipmentPackages, shipmentCourier);
            this.shipments.push(shipment);
        } else {
            console.log('Invalid package IDs or courier ID');
        }
    }

    trackShipment(id) {
        return this.shipments.find(shipment => shipment.id === id);
    }

    updateShipmentStatus(id, newStatus) {
        const shipment = this.trackShipment(id);
        if (shipment) {
            shipment.updateStatus(newStatus);
        }
    }

    viewAllPackages() {
        return this.packages;
    }

    viewCourierInfo(id) {
        return this.couriers.find(courier => courier.id === id);
    }
}

// Example usage
const company = new ShippingCompany();

// Add packages
company.addPackage(new Package(1, 2.5, 'kolhapur'));
company.addPackage(new Package(2, 1.2, 'Nav-Mumbai'));

// Register couriers
company.registerCourier(new Courier(1, ' shrinivas', 'Truck'));
company.registerCourier(new Courier(2, ' jayesh', 'van'));

// Create shipment
company.createShipment(1, [1, 2], 1);

// Track shipment
console.log(company.trackShipment(1));

// Update shipment status
company.updateShipmentStatus(1, 'Delivered');

// View all packages
console.log(company.viewAllPackages());

// View courier info
console.log(company.viewCourierInfo(1));
