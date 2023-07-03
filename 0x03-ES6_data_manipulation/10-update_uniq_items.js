// 10-update_uniq_items.js

function updateUniqueItems(map) {
  // Throw an error if the argument is not a map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate over the map entries
  for (const [key, value] of map.entries()) {
    // Update the quantity to 100 if it is currently 1
    if (value === 1) {
      map.set(key, 100);
    }
  }
}

export default updateUniqueItems;
