function listRides() {
    // Array of sample rides
    const rides = [
        { name: 'ብዙአየሁ ክንዱ', phone: '0941755787', car: 'vits' },
        { name: 'እዮሲያስ ፉአድ', phone: '0758565053', car: 'yaris' },
        { name: 'ሳሙኤል አስቻለው', phone: '0928758565', car: 'yaris' },
        { name: 'awet awet', phone: '0968456856', car: 'suzuki' },
        { name: 'esubalew esuba', phone: '0958465558', car: 'suzuki' }
    ];



    // Randomize number of rides for the location
    const randomRides = rides.sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 5) + 1);

    // Display rides in the "availableRides" section
    const rideList = document.getElementById('availableRides');
    rideList.innerHTML = '<h3>Available Rides:</h3>';
    randomRides.forEach(ride => {
        const rideElement = document.createElement('div');
        rideElement.classList.add('ride');
        rideElement.innerHTML = `
            <p><strong>Name:</strong> ${ride.name}</p>
            <p><strong>Phone:</strong> ${ride.phone}</p>
            <p><strong>Car:</strong> ${ride.car}</p>
        `;
        rideList.appendChild(rideElement);
    });
}