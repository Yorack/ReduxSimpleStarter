import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Chart from '../component/chart'
import GoogleMap from './google-map'
import _ from "lodash";

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    th: {
        textAlign: 'center',
    }
});

class WeatherList extends Component {
    renderWeather(cityData) {
        const id = cityData.city.id;
        const name = cityData.city.name;
        const { lat, lon } = cityData.city.coord;

        console.log(cityData);

        const data = cityData.list.map(weather => {
            return {
                temperature: _.round(weather.main.temp - 273.15),
                pressure: weather.main.pressure,
                humidity: weather.main.humidity
            }
        });

        console.log(data);
        return <TableRow key={id}>
            <TableCell>
                {name}
                <GoogleMap lat={lat} lng={lon}/>
            </TableCell>
            <TableCell>
                <Chart data={data} dataKey={'temperature'} units={'°C'} color={'#2980b9'}/>
            </TableCell>
            <TableCell>
                <Chart data={data} dataKey={'pressure'} units={'hPa'} color={'#2c3e50'}/>
            </TableCell>
            <TableCell>
                <Chart data={data} dataKey={'humidity'} units={'%'} color={'#27ae60'}/>
            </TableCell>
        </TableRow>
    }

    render() {
        const {classes, weather} = this.props;

        if (weather.length === 0) {
            return <div></div>;
        }

        return (
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.th}>City</TableCell>
                        <TableCell className={classes.th}>Temperature</TableCell>
                        <TableCell className={classes.th}>Pressure</TableCell>
                        <TableCell className={classes.th}>Humidity</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        this.props.weather.map(this.renderWeather)
                    }
                </TableBody>
            </Table>
        );
    }
}

const mapStateToProps = ({weather}) => {
    return {weather};
};

export default withStyles(styles)(connect(mapStateToProps)(WeatherList));