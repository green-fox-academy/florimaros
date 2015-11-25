curr_room = "Hall"

def move(dir, room):
    if dir == "north" and room == "Hall":
        return "Living room"
    elif dir == "south":
        return "Kitchen"
    else:        
