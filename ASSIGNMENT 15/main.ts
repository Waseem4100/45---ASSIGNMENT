/*QUESTION # 15 Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think of
someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the
end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with
the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still
in your list.
*/


 let guest : string[] = ["usman","anas", "taha","jawad"];
 let cannotAttend = guest[0]
 console.log (`${cannotAttend} cannot attend the dinner`)
guest.splice(0,1, "sufiyan" )
 guest.map((items)=> console.log (`${items} you are invited to the dinner`))
