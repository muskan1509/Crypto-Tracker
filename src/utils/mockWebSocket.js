export const simulatePriceChange = (assets) => {
  return assets.map(asset => {
    const priceFluctuation = (Math.random() * 2 - 1) * 0.05;
    const change = (value) => Number((value + (Math.random() * 2 - 1)).toFixed(2));
    return {
      ...asset,
      price: Number((asset.price * (1 + priceFluctuation)).toFixed(2)),
      change1h: change(asset.change1h),
      change24h: change(asset.change24h),
      change7d: change(asset.change7d),
      volume24h: Math.floor(asset.volume24h * (1 + priceFluctuation))
    };
  });
};