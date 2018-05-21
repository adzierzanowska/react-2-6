var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    componentWillMount: function() {
        console.log('componentWillMount: Za chwilę zostanie utworzony komponent');
    },
/* RENDER */
    componentDidMount: function() {
        console.log('componentDidMount: Komponent został utworzony');
    },

    componentiWillReceiveProps: function() {
        console.log('componentWillReceiveProps:  Metoda ta zostanie wywołana tylko wtedy, gdy komponent otrzyma nowe właściwości i nie jest to faza pierwszego renderowania. Pozwala aktualizować stan na podstawie nadchodzących właściwości')
    },

    shouldComponentUpdate: function() {
        console.log('shouldComponentUpdate: Metoda jest wywoływana tuż przed wywołaniem metody render i pozwala sprawdzić czy faktycznie trzeba jeszcze raz przerysować komponent. Zwracana jest tutaj wartość true/false. Metodę tę możemy zastosować, kiedy bardzo zależy nam na optymalizacji naszej aplikacji')
        return true;
    },

    componentWillUpdate: function() {
        console.log('componentWillUpdate: Jeśli metoda shouldComponentUpdate zwróci wartość true, to natychmiast zostanie ona wywołana. Powinna zostać wywoływana tylko do przygotowania na nadchodzące zmiany. Nie należy w tej metodzie korzystać z this.setState(infinite loop)')
    },

    componentDidUpdate: function() {
        console.log('componentDidUpdate: Możemy w niej wykonać np. jakieś manipulacje DOM, czy tez zaktualizowac style ')
    },

    componentWillUnmount: function() {
        console.log('componentWillUnmount: Możemy wykonywać wszystkie rzeczy związane z odpinaniem timerów czy nasłuchiwania zdarzeń na elementach DOM')
    },

    render: function() {
        return (
            React.createElement('div', {},
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
            React.createElement('button', {onClick: this.increment}, '+'),
            React.createElement('button', {onClick: this.decrement}, '-')
        )
        );
    }
});

var element = React.createElement('div', {},
            React.createElement(Counter),
            React.createElement(Counter),
            React.createElement(Counter),
            React.createElement(Counter),
            React.createElement(Counter),
);
ReactDOM.render(element, document.getElementById('app'));