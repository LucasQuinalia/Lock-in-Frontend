import "./App.css"
import { Focus } from "./components/focus"

function App() {

  const content = [
    {id:1,
      title:"Study 1",
      timer:240,
      short_break:60,
      long_break:120,
      tasks:[
        {id:3,
          title:"Study Java",
          completed:true,
          due_date:"2025-09-10"
        }
      ]
    },
    {id:3,
      title:"Study 2",
      timer:240,
      short_break:60,
      long_break:120,
      tasks:[]
    },
    {id:4,
      title:"Study 3",
      timer:240,
      short_break:60,
      long_break:120,
      tasks:[]
    },
    {id:5,
      title:"Study 4",
      timer:240,
      short_break:60,
      long_break:120,
      tasks:[]
    },
    {id:6,
      title:"Study 5",
      timer:240,
      short_break:60,
      long_break:120,
      tasks:[]
    }
  ]

  return (
    <div className="focuses">
      {content.map((focus) => (
        <Focus
          key={focus.id}
          title={focus.title}
          timer={focus.timer}
          shortBreak={focus.short_break}
          longBreak={focus.long_break}
          tasks={focus.tasks}
        />
      ))}
    </div>
  )
}

export default App
