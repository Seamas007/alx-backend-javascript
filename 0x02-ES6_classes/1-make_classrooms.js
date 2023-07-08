import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const clsRooms = [];
  clsRooms.push(new ClassRoom(19));
  clsRooms.push(new ClassRoom(20));
  clsRooms.push(new ClassRoom(34));

  return clsRooms;
}
