const appliciances=[
    {
      image:"https://img.freepik.com/free-vector/set-realistic-vacuum-cleaners-various-types_1284-32867.jpg?w=740&t=st=1688798891~exp=1688799491~hmac=7812337e1bb67cd27f20b73cee39309df31c8e10c8d7cabfe7877452de3a5c35",
      brand:"bajaj",
      model:"cleaning set",
      price:"-/6999"
    },
    {
      image:"https://img.freepik.com/free-vector/washing-machine-realistic-background-with-laundry-equipment-symbols-illustration_1284-29130.jpg?w=740&t=st=1688798959~exp=1688799559~hmac=b2099f0f474296de3b1c80ce9a84797f370a0c3d10121112e92781835bde5a57",
      brand:"whirlpool",
      model:"front loaded washing machins",
      price:"-/22199"
    },
    {
      image:"https://img.freepik.com/free-photo/blender-juice-machine_1203-7723.jpg?w=360&t=st=1688798999~exp=1688799599~hmac=7771bc303f02aa93a0f5dd33358b0b63008c2b38584f599ee1bbc1dd54d61ac3",
      brand:"pigeon",
      model:"linear mixer",
      price:"-/1999"
    },
    {
      image:"https://img.freepik.com/free-photo/blender-juice-machine_74190-4903.jpg?w=740&t=st=1688799045~exp=1688799645~hmac=80b282de2995e50fc48570477842ce3a2ef7dfd764fb03022a0091314eeca581",
      brand:"bajaj",
      model:"cleaning set",
      price:"-/1999"
    },
    {
      image:"https://img.freepik.com/free-photo/new-iron-isolated-white-background_93675-131871.jpg?w=740&t=st=1688799072~exp=1688799672~hmac=bfdc0f172d53ef4ec9808e2f5fd5bb936ff124bfd31a7a3d2f01a78e06ade746",
      brand:"whirlpool",
      model:"iron machine",
      price:"-/2199"
    },
    {
      image:"https://img.freepik.com/free-vector/hand-blender-food-processor-clear-plastic-glass_107791-6763.jpg?w=740&t=st=1688799104~exp=1688799704~hmac=e491632e11c9c71df55bfb8298e9cc013669c9346150609596824a7f686bf178",
      brand:"pigeon",
      model:"linear mixer",
      price:"-/1999"
    },
    {
      image:"https://img.freepik.com/free-vector/set-realistic-vacuum-cleaners-various-types_1284-32867.jpg?w=740&t=st=1688798891~exp=1688799491~hmac=7812337e1bb67cd27f20b73cee39309df31c8e10c8d7cabfe7877452de3a5c35",
      brand:"bajaj",
      model:"cleaning set",
      price:"-/6999"
    },
    {
      image:"https://img.freepik.com/free-vector/electric-teapot-coffee-morning-tea-beverage_134830-660.jpg?w=740&t=st=1688799127~exp=1688799727~hmac=0ad80faa5172008239825010bffa661a230210ce74b5b6eb5a27adb555a1aaed",
      brand:"max",
      model:"felectric kettle",
      price:"-/1299"
    },
    {
      image:"https://img.freepik.com/free-photo/blender-juice-machine_1203-7723.jpg?w=360&t=st=1688798999~exp=1688799599~hmac=7771bc303f02aa93a0f5dd33358b0b63008c2b38584f599ee1bbc1dd54d61ac3",
      brand:"pigeon",
      model:"linear mixer",
      price:"-/1999"
    },
    {
      image:"https://img.freepik.com/free-vector/white-microwave-oven-with-empty-glass-plate-inside-with-open-close-door_1441-1620.jpg?w=740&t=st=1688799180~exp=1688799780~hmac=6052a6fdb8d0f819af3d5441ab2554aa380605573a3badcdd6d1445c5781693b",
      brand:"pigeon",
      model:"microoven set",
      price:"-/9999"
    },
    {
      image:"https://img.freepik.com/free-photo/iron-isolated-white-background_93675-131969.jpg?w=740&t=st=1688799249~exp=1688799849~hmac=8a8b1ecfe7205e39d70a6c1a5814fc28efbdcab1c8a9b4952823a1c09cfc6b52",
      brand:"whirlpool",
      model:"iron machine",
      price:"-/2199"
    },
    {
      image:"https://img.freepik.com/free-vector/hand-blender-food-processor-clear-plastic-glass_107791-6763.jpg?w=740&t=st=1688799104~exp=1688799704~hmac=e491632e11c9c71df55bfb8298e9cc013669c9346150609596824a7f686bf178",
      brand:"pigeon",
      model:"linear mixer",
      price:"-/1999"
    },
    {
        image:"https://img.freepik.com/free-vector/set-realistic-vacuum-cleaners-various-types_1284-32867.jpg?w=740&t=st=1688798891~exp=1688799491~hmac=7812337e1bb67cd27f20b73cee39309df31c8e10c8d7cabfe7877452de3a5c35",
        brand:"bajaj",
        model:"cleaning set",
        price:"-/6999"
      },
      {
        image:"https://img.freepik.com/free-vector/washing-machine-realistic-background-with-laundry-equipment-symbols-illustration_1284-29130.jpg?w=740&t=st=1688798959~exp=1688799559~hmac=b2099f0f474296de3b1c80ce9a84797f370a0c3d10121112e92781835bde5a57",
        brand:"whirlpool",
        model:"front loaded washing machins",
        price:"-/22199"
      },
      {
        image:"https://img.freepik.com/free-photo/blender-juice-machine_1203-7723.jpg?w=360&t=st=1688798999~exp=1688799599~hmac=7771bc303f02aa93a0f5dd33358b0b63008c2b38584f599ee1bbc1dd54d61ac3",
        brand:"pigeon",
        model:"linear mixer",
        price:"-/1999"
      },
      {
        image:"https://img.freepik.com/free-photo/blender-juice-machine_74190-4903.jpg?w=740&t=st=1688799045~exp=1688799645~hmac=80b282de2995e50fc48570477842ce3a2ef7dfd764fb03022a0091314eeca581",
        brand:"bajaj",
        model:"cleaning set",
        price:"-/1999"
      },
      {
        image:"https://img.freepik.com/free-photo/new-iron-isolated-white-background_93675-131871.jpg?w=740&t=st=1688799072~exp=1688799672~hmac=bfdc0f172d53ef4ec9808e2f5fd5bb936ff124bfd31a7a3d2f01a78e06ade746",
        brand:"whirlpool",
        model:"iron machine",
        price:"-/2199"
      },
      {
        image:"https://img.freepik.com/free-vector/hand-blender-food-processor-clear-plastic-glass_107791-6763.jpg?w=740&t=st=1688799104~exp=1688799704~hmac=e491632e11c9c71df55bfb8298e9cc013669c9346150609596824a7f686bf178",
        brand:"pigeon",
        model:"linear mixer",
        price:"-/1999"
      },
      {
        image:"https://img.freepik.com/free-vector/set-realistic-vacuum-cleaners-various-types_1284-32867.jpg?w=740&t=st=1688798891~exp=1688799491~hmac=7812337e1bb67cd27f20b73cee39309df31c8e10c8d7cabfe7877452de3a5c35",
        brand:"bajaj",
        model:"cleaning set",
        price:"-/6999"
      },
      {
        image:"https://img.freepik.com/free-vector/electric-teapot-coffee-morning-tea-beverage_134830-660.jpg?w=740&t=st=1688799127~exp=1688799727~hmac=0ad80faa5172008239825010bffa661a230210ce74b5b6eb5a27adb555a1aaed",
        brand:"max",
        model:"felectric kettle",
        price:"-/1299"
      },
      {
        image:"https://img.freepik.com/free-photo/blender-juice-machine_1203-7723.jpg?w=360&t=st=1688798999~exp=1688799599~hmac=7771bc303f02aa93a0f5dd33358b0b63008c2b38584f599ee1bbc1dd54d61ac3",
        brand:"pigeon",
        model:"linear mixer",
        price:"-/1999"
      },
      {
        image:"https://img.freepik.com/free-vector/white-microwave-oven-with-empty-glass-plate-inside-with-open-close-door_1441-1620.jpg?w=740&t=st=1688799180~exp=1688799780~hmac=6052a6fdb8d0f819af3d5441ab2554aa380605573a3badcdd6d1445c5781693b",
        brand:"pigeon",
        model:"microoven set",
        price:"-/9999"
      },
      {
        image:"https://img.freepik.com/free-photo/iron-isolated-white-background_93675-131969.jpg?w=740&t=st=1688799249~exp=1688799849~hmac=8a8b1ecfe7205e39d70a6c1a5814fc28efbdcab1c8a9b4952823a1c09cfc6b52",
        brand:"whirlpool",
        model:"iron machine",
        price:"-/2199"
      },
      {
        image:"https://img.freepik.com/free-vector/hand-blender-food-processor-clear-plastic-glass_107791-6763.jpg?w=740&t=st=1688799104~exp=1688799704~hmac=e491632e11c9c71df55bfb8298e9cc013669c9346150609596824a7f686bf178",
        brand:"pigeon",
        model:"linear mixer",
        price:"-/1999"
      },
]
export default appliciances