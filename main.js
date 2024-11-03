fetch('https://azapi.ok-ex.io/sno/oapi/trader/pairs')
    .then (response => response.json())
    .then (res =>{
        const data = res.data;
        let rows = '';
        data.forEach(data => {
            rows += `<tr><td>${data.symbol}</td><td>${data.asset}</td><td>${data.market}</td><td>${data.is_trading}</td><td>${data.lot_size}</td><td>${data.lot_size_price}</td><td>${data.limit_max_trade}</td><td>${data.limit_min_trade}</td><td>${data.type_orders_allow}</td><td>${data.status}</td><td>${data.h}</td><td>${data.new_coin}</td><td>${data.time_approve}</td><td>${data.prov}</td></tr>`
        })
        console.log(rows)
        document.getElementById('tableRows').innerHTML = rows;
    })
    .catch(error => console.error())