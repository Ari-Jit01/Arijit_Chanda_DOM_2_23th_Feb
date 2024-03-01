async function cryptoData() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
        const data = await response.json();

        // Display data in the table
        const tableBody = document.querySelector('#coinTable tbody');

        data.forEach(coin => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${coin.name}</td>
                <td>${coin.symbol}</td>
                <td>${coin.current_price}</td>
                <td>${coin.market_cap}</td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the fetchData function
cryptoData();