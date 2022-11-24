async function main() {
  const HelloPolygon = await ethers.getContractFactory("HelloPolygon");
  
    // Start deployment, returning a promise that resolves to a contract object
    const hello_polygon = await HelloPolygon.deploy("Hello Polygon!");   
    console.log("Contract deployed to address:", hello_polygon.address);
  }
  
  main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });