import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import CreateStudents from "./journey/studentjurney/createstudent";
import ManageStudents from "./journey/studentjurney/managestudent";
import StudentsJourney from "./journey/studentjurney/index";
import MentorDetail from "./journey/mentorjourney/mentordetail";
import ClassTime from "./journey/classtime/class";

function App() {
  return (
    <div id="zen-landing-page-container" className="app-container">
      <div
        id="zen-content-area-container"
        className="zen-content-area-container"
      >
        <div id="zen-sidebar" className="zen-sidebar">
          <div className="sidebar-header-branding">
            <img
              className="brand-logo"
              
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAA/1BMVEX///8ra6kArk0REiQWkkkFBx9BQUQAXKIAqkEArUkNYKQVYqUnaagAq0QgZqcAWqEKcjfk6vL09/rR3Ojt8faXsM6MqMlIe7EAV6Btk71fibjC0OF1mMAAjj8AqDt/n8Ti8+c7dK2nvNVVgrS2yNwApjLC5c0AABYAUJzz+vWCzJjZ7+AAAAAAR5l3x4/U5tmKv5s9m1w4tWHF385nrXyv07sAhzAhsVZ7to1dv3u04MNUpnCM0KFKuGqj2bUrllKfyasAgRtXWGFISFFyc3pkZG0AahmyyrgAfTBunn0ueUMAaiZRjmUAejgFokkAlTwwMDwgIS+Ghombm6G3uLuNEvalAAAOmklEQVRogd2bC3/ayBHAVxw+wa4e1hs9kNADbODOSUhjB4Kd1Ma9tmlSJ+n3/yydWUkgsJRYdpL7tXMX44C0/53Zee2iEPK/KTrIz0ZqRmYFXuo4cRw7TuraiaGZPwGsZVEqiJRSRkthjKpK7FnGDzWCZqUIZYoSu5GVZL7vZ4kdpBLgGROFIPtBeD1xBoyp1LN87d5nRhLFA7RFZHx/smarAI7tYmjTAI0tFNBey7U1Mxesosb+9yWbNli1AGu+nQqKwlDyF0WI3cRAb9MzD4zvfE96FgM5MdG2tiNQJkmSsCcSzAH4iDdcmI17b1UeKTroIlg6uppDlUNshU8l14fLDI8xIfsuaENiNDBRIZE1cbd4NU7glkxgA/s7oH1RobB+mjtQvg4u8IwlaCqRek9GJ6ISg9KW+iAyp9PYwPuY88RgzxjzdKKl7KFkFEVJ8jsfx9RyMRSW6sQQHqx0ISwCzRmLzHyYVsleH4A/SxA5aHCDfsPFaoS6sE5U4aNI1GrFVoW8VogG0VrZewsHP3dFXmokpR1bpH5hLT1urzWKmpQr57GWeqtlZnJ3akuQQlER5UGzocZ2hFaxrovAjlIQp3QzWDbFixKomlaU0kqWaZqJFPP7tdZsdaARj3sKHwZShpIm2ySta1ZcmoNmcZPmeLtqkKAd2xQHJrDLMQShAi6usFgxLWIxfgmHKYfRKLZma3tssbYmGtzYkEHNWIptuFahShq4zj12hNHeiq2TtGSr9RVRR7gKiTMQM5NJNOXOZe9rTh/DJiQtnWjQUI01RVJSeLUEQhSa8PcMuq831KGWbGOf3ZQTLcZD14Ifao42Heke22ZBO7baxK5uB8yYa+v6JEvzN7xDX3sMWyT6VgW1xOl+BFuCNG+OUFws1qbimxBKRDeT+F7RoRmw3XZsWmGLekHODFM3oVekgyinJwKEjy26kmhHbizWZH5gW+3aCF9kFTa91wT4wilfXz9OSTagbpJEaX0jB4vSmi3BYpb3s5oGxOINmeZ4yamtZYEnFIUWmjvngJ20Y2eisGNLSu0lA/BuLY0GvhFnuGtBvSXmWGZSXXQIhISm7dgx0crbIW3WSfI71HYvyny4ArMK5DmJYSu9F2bAzmirzi2hDrDLMeL6i9wUYiozY033BVx9i/GIA5tV2TYsYEt2umNLDWztd990SaRCBOlMcWJFQRfI8sRWFlklAnbchm0hW/oGm3iW7pJTQWFBEMOuRB14gUdVvuxCUmQmzhbasT3I1uV6OxVdYfvp7zb5ZqCpvJ+hQpRpBA8kvFjgDVrhqUpADFVpw7aBbWzZpZtqiRsEUCUlJSi3wpwtsDiBTjpCJ4sdqKj4qbhji3VB+hW2e59tlBttzU/VwMzZ+gAsHOmQ0C1Dy1KKnTWWPaPKvp+cvsqGW8oMKeWpYe9Myc/jygxgvSGna6ka80ILUc54xivLuOISTRXbsKMqW6lNS94pwMDPqZoR/zRNxbwvtZjIJ7r1c2AP1FZsKPc7dn0JdKG10VwCfpXx5sI6dQIHGliMCm2bX3J2m01RAGyffp1NYhfZaCCJGzzDgwFJccDrdi0jGM0ciG2OIQJaZTe0PMbvGrBNAi28IkS2G0OzCMU9sL14V9Mew7Yr7KYWF/M57jf5RYxKXqbpuuknlh04P5pNODvfr0FCBYAfxZKfpJXDEWDr7dhuA9uPUsdxrW2/Duy8MVVdPJwY/K4qGN2at+1WoZF9CrvcRpq2Z2U+mDQ9VZM8agyP+LgrEaGC+65B9MwReQa21Sq7ocF/CLvovLNtpJgWP1MBnoehKCkGpoQ8/VlqgPMqG4hH6s322PtH5ZqLqpIMwoxJkOJ0R6UM9pywTXRYbEP/VrJhvU+fyj4Ue4CnSS7RKcuI7mYGJHPF82J0MwX26N8nvln9GWEAmRLYRITw93jate4fdj6GXc2pDWwiWsQCNjQGlshSjZh+zK/HnfD26BMKkdaWXakltOFYGFwvgnTr8zBTKBW5oSRR8qLI9Yq+hbNb5fOoWr+b2CAuT/XVTdj2ANvK34RaAhusVvWbYc8kHbB1TTMMQ9N2I3nI5gaS8pP07XFW0TLmvUNLdqVPFTGUdQM6MTZgsWvjNwXFdWnEL5aYEnu2lUAVifhHulUpRH67nsmq9ufANq14wBj1/IOFc5AdUyHZfkuiWV5kRcJ2Vwj9OZigXX9e2ROJRoTFYYBfBhiJHQWRVXwfpMc2mhzjv/zARHNXdgd8T9Rqb+Dv7YExUUiw6kYg4vdTIExN0Ql03ALD8pu2qAgi/HGFU8UywVW3bNwDs1b7sf0zD1y2WDNSVvFnhTmwFHmJS2LfhMINqQXuDAaKrWdbOD93aLUP1URowdwdClpuix2cKSgsiyjfCDMpzz7+Kb76lMX+Fg5pJWh31qOLeC62hUmC7x6cH+VrwU/tzFiitp4bgJcw8PvEKryNaaTtWS4/L9g5q+XVH2RzNjoGgz2RoRGHU9DUVrFisanHtLYYNUrK966l2mna8MVBrhHmNdgLiupA4hg0mBgUt0Khqz+XbBRM6NouVJoOrfOT0qgyMwrN087T8m1J09lgg2BcmFtk43l5rrdVXRBFynxavQDCvRUa+3xdTxuY+dH27psQX9wr26xy6AHmtljT/r1BYP8GwXGwyhL/6rWozTEKP+vAb1TKUsI/qkxExaP7Vkd7IJQfTm2hkMxFweF1BAqZeZAjdRMKnJ9ZNuzNRbH6pUYMebe+52qS6RQcPQLlsQehA5pGycH37dPpaDriAr9M9+ah+UmUUpV/awsVVGPMJ8/2LmmWZ+9e/O0PSIRQAARV8uxtazydTyZX67PlotORZblXCvwu9y8Wy7P1ajIZlRAtsz1JHKDxoIIe//3Fu2ffUvjZ8xfD4Yf3/yC+Cn1olp+sTEeT1Wy5uOjIYdiT+/3Ofen3+3IvDOUOTGK2KqZgGrBP8qAcP3t//GE4fPH8K+qPENztHh8f/xO6Xp9zR5P18rLTC3v9WmbdLODizuVyPc9BvmuRP94fH3e7XcSPaskv/4LgbvcDsI+5gaaT2aU87j0QejiDcf9yNsn5/8IhcWzA/+XlPfKrF+eczNU+fv8HGV0tw7H8CGxlAnLYW16Bpu9xzA/58MPzF6/2ycPzbneHPv7wdgH6flO3B8wM9F/MOPu4JHTPhzv6yxfD7fto8e7HrwzbD4tJ9ZfLZfHeBTjEeNx0S1/ufOzuwbvDF7nlp6+HOzRcM6y7vydfXPRkThxNz2T+1pzMOa5/OQUZzS/7XM8wDOtMNtxaPV/31+AKz95WyN0PB+S+zDn92Xw6nS9lZBOyPmTn5kO2vFhPICAXfBoHMxhW2EB/+4y8fFNVe7h3fa+/nJ3h6yQfHRRG0Lq3z4bpXC3PZhfw3ix37FGIby8gAVXG63+soodvXvKw3nlat4oO17gkckeG11XnDH7nBi7Zk4ItoynA2H0+C7JaX02v4Ir+FIL0alkZb8c+H+4C/eWbMsIqNpcnGOIruTMekWnYH18RMpORfbWvt3yW6zruhHDHcgzS263E2U7zUuXzN/sxPnr+Nlf+49bgMzBlDx2sNyXzMDdtr7+4z4YLoaaswo48BWuHk9UagDij9WwyX+zWO1f5bU1um74a7lk9nJPpOP8NhyzYHWSPw7DP2VhGOj1YkguIA9CVkPm4n693CGY661QCL7f48FVtTp8eKD5CM6KMYRaXcniGNu9cgBHWV6tlH9Z7Op+P1jJSZmeQ9XGSU778kxBvwiq07B+oXV9OCna3uFoG04Sd0qjzxSWs+gV3IZSZ3JvzX1a9cJXf3uG6zi9CsA/Yn7cBPPCqq93AflmwP+aX45Bg3fGFzH2I+w360GQ+Wa1A7/7ZejabrZd9GYrmZD6aY/RzZblPovNDOj1Y7e75/VKC8qqM8yIcF7hwqxEBs4VQEUerBfexkEuf5x2+3ljWIaVyG4Uzbg2YEMbl8mJ8GF/DV7Xs12WY/TtXXD7L7YNpDBj9bxYXfhP0MBeF1XDuW7XLwV/Xst8U+ebdaCnn40CCXK0vH1dHF8v1BLy1WL+r6bsif76pdTXeWLwDDyNzuTB7r74uPEjgZvlyWVYbtME73hbVOdvor+evy37uTG4estonVhvG+jaOv4wLXyXPXp//dVTnas93M5qG90eRe9yhLqEhvbq6WoFv57JawV/XGN/4eVjTS/I0X478vN7ZKnIVVqgA7VwCcdcBNwg0tDCLy8443GvyxnWqfkVKA4e9xdl6C+UbECNLEsuOoiBw3SCIIttKkgwP3raNPDa3CzQBH6SoNQ8XrAxg4FmJ1YwMdia2hF+M0HzvVQr+DR9TE2I8xIY9U9HUr8ACIcbnAzclO1lcnEFe2Up0KvJHIGnz44M01Ygeqaqw2z4B/4J3Ae3kcG0TlR8qaE7DY3wK7sXhU/5YZ0Wmk9Zq3xefKdQDc1pi3bacOgbftYutnqN5sJgeVRg+JuuJ95RGk5iuqDSdtT9dEkXhjwdn8d7TwQoesuCDwNT7Xs9A14jhUMafKLGl3eEbxfNNLWBKu3O09mKD6qgdsjiaz4VYEsNDzh8sRgoOFfFHvUVFYPj4L/Fj8IR2B3iPlAz/aQOa13A52UhFZRD8jH/kgWJBLlOs4mtJtIP3w829E9MGupCY/Al/7ms/U7RIYjROIZU7Pyykv0bHKvJd/01FG7r9s639fyK//nlCjv48Ib9s5Yj/PDk6Kv529MsPFmAf3X36dHdydHJzAj/uPt9dw+tvdzcn1z+B/cvd9fX17c1mc7O5vv6yufvP7Zdfv2y+bG4+PW1osCoY8eTTSWHiE27KT2DXwrTIPtpcf77Z/Ha7+W1z/dvmyxdE/6rdPc3mRzeb22tUChS6ub3+9eZ2c3sDmM3m8y38d31UsG+v4TL8//bu9vPm8+YLqL/5/MT1/nR7C+Nubm6Bzn/DqWz4bG6vNzcFG/3qE1oCf4CznRTmeaLU+ja+f1JYnXxrhB8ofyb7v6XhqhZ8S6fQAAAAAElFTkSuQmCC"
              alt="college-logo"
            />
            College Detail
          </div>
          <nav className="zen-sidebar-nav" id="zen-sidebar-nav">
            <ul>
              <li>
                <Link to="/students">Student Journey</Link>
              </li>
              <li>
                <Link to="/mentor">Mentor Journey</Link>
                </li>
                <Link to="/class">Class Timing</Link>
            </ul>
          </nav>
        </div>
        <div id="zen-content-area" className="zen-content-area">
          <Routes>
            <Route path="students" Component={StudentsJourney}>
              <Route path="create" Component={CreateStudents} />
              <Route path="manage" Component={ManageStudents} />
            </Route>
            
              <Route path="mentor" Component={MentorDetail}/>
              <Route path="class" Component={ClassTime}/>
              
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;