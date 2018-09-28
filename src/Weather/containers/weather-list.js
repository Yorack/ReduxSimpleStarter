import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {weatherAction} from '../actions';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Area, AreaChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis} from 'recharts';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

class WeatherList extends Component {
    renderWeather(cityData) {
        const id = cityData.city.id;
        const name = cityData.city.name;

        console.log(cityData);

        const temperature = cityData.list.map(weather => {
            return {
                temp: weather.main.temp,
                pressure: weather.main.pressure,
                humidity: weather.main.humidity
            }
        });

        console.log(temperature);
        return <TableRow key={id}>
            <TableCell>
                {name}
            </TableCell>
            <TableCell>
                <AreaChart width={300} height={150} data={temperature}>
                    <Area type="monotone" dataKey={'temp'} stroke="#8884d8"  fill='#8884d8' />
                    {/*<XAxis dataKey=""/>*/}
                    <YAxis/>
                    <Tooltip/>
                    {/*<CartesianGrid strokeDasharray="1 1"/>*/}
                </AreaChart>
            </TableCell>
            <TableCell>
                <AreaChart width={300} height={150} data={temperature}>
                    <Area type="monotone" dataKey={'pressure'} stroke="#8884d8"  fill='#8884d8' />
                    {/*<XAxis dataKey=""/>*/}
                    <YAxis/>
                    <Tooltip/>
                </AreaChart>
            </TableCell>
            <TableCell>
                <AreaChart width={300} height={150} data={temperature}>
                    <Area type="monotone" dataKey={'humidity'} stroke="#8884d8"  fill='#8884d8' />
                    {/*<XAxis dataKey=""/>*/}
                    <YAxis/>
                    <Tooltip/>
                </AreaChart>
            </TableCell>
        </TableRow>
    }

    render() {
        const {classes, weather} = this.props;

        if (weather.length === 0 ) {
            return <div></div>
        }

        return (
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>City</TableCell>
                        <TableCell>Temperature</TableCell>
                        <TableCell>Pressure</TableCell>
                        <TableCell>Humidity</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        this.props.weather.map(this.renderWeather)
                    }
                    {/*{rows.map(row => {*/}
                        {/*return (*/}
                            {/*<TableRow key={row.id}>*/}
                                {/*<TableCell component="th" scope="row">*/}
                                    {/*{row.name}*/}
                                {/*</TableCell>*/}
                                {/*<TableCell numeric>{row.calories}</TableCell>*/}
                                {/*<TableCell numeric>{row.fat}</TableCell>*/}
                                {/*<TableCell numeric>{row.carbs}</TableCell>*/}
                                {/*<TableCell numeric>{row.protein}</TableCell>*/}
                            {/*</TableRow>*/}
                        {/*);*/}
                    {/*})}*/}
                </TableBody>
            </Table>
        );
    }
};

const mapStateToProps = ({weather}) => {
    return {weather};
};

export default withStyles(styles)(connect(mapStateToProps)(WeatherList));