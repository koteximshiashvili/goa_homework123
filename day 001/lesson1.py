from turtle import*
shape("turtle")
speed(50)
width(7)
color("purple")
forward(200)
#we want to paint a house

#step 1 draw a square
left(90)


forward(200)
left(90)


forward(200)
left(90)

forward(200)
left(90)





forward(70)
color("yellow")
begin_fill()
left(90)
forward(120)
right(90)
forward(60)
right(90)
forward(120)
end_fill()

penup()
goto(200, 200)
pendown()


color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()


penup()
goto(200, 120)
pendown()



color("blue")
begin_fill()
left(300)
forward(60)
right(90)
forward(60)
right(90)
forward(60)
right(90)
forward(60)
end_fill()

penup()
goto(0, 120)
pendown()

color("blue")
begin_fill()
left(90)
forward(60)
left(90)
forward(60)
left(90)
forward(60)
left(90)
forward(60)
end_fill()
exitonclick()