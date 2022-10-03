// import Card from '@mui/material/Card';
import { Card, ButtonGroup, Button, TextField, CardContent} from '@mui/material'


import './scss/Section.scss'



export default function Section(props) {
    return (<>
        {/* <Card className="box" variant="outlined">
            <CardContent>
                {props.children}

            </CardContent>
        </Card> */}
        <div className="outer">
            <div className="inner">
                {props.title && <h2>{props.title}</h2>}
                {props.children}
            </div>
        </div>
    </>)
}
