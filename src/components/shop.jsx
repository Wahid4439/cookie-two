import React from 'react';

function Shop(props) {
  const upgrades = [
    { name: 'Small Oven', cost: 50, increase: 1 },
    { name: 'Medium Oven', cost: 100, increase: 2 },
    { name: 'Big Oven', cost: 200, increase: 5 }
  ];

  function buyUpgrade(cost, increase) {
    if (props.wallet >= cost) {
      props.setWallet(props.wallet - cost);
      props.setCookiesPerSecond(props.cookiesPerSecond + increase);
      props.setMessage('Upgrade bought!');
    } else {
      props.setMessage('Not enough cookies!');
    }
  }

  return (
    <section className="buttons">
      {upgrades.map((upgrade, index) => (
        <button
          key={index}
          onClick={() => buyUpgrade(upgrade.cost, upgrade.increase)}
        >
          {upgrade.name} ({upgrade.cost})
        </button>
      ))}
    </section>
  );
}

export default Shop;