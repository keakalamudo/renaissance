#Learning Python.
#Dictionary Example.

people = {
            'aaa' : {'phone':'1234', 'addr':'1234' },
            'bbb' : {'phone':'2345', 'addr':'2345' },
            'ccc' : {'phone':'3456', 'addr':'3456' },
            'ddd' : {'phone':'4567', 'addr':'4567' },
            'eee' : {'phone':'5678', 'addr':'5678' },
            'fff' : {'phone':'6789', 'addr':'6789' }

}

labels = {
            'phone': 'phone number',
            'addr':  'address'
}
print 'Please enter a name please: '
name = raw_input('Name: ')

request = raw_input('Phone number (p) or address (a)?')

if request == 'p' : key = 'phone'
if request == 'a' : key = 'addr'

if name in people: print "%s's %s is %s." %(name, labels[key], people[name][key]) 
