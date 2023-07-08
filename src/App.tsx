interface Holiday {
  date: Date;
  name: string;
}

const HOLIDAYS: Holiday[] = [
  {
    date: new Date("2023-01-01"),
    name: "Año Nuevo"
  },
  {
    date: new Date("2023-02-27"),
    name: "Carnaval"
  },
  {
    date: new Date("2023-02-28"),
    name: "Carnaval"
  },
  {
    date: new Date("2023-03-24"),
    name: "Día Nacional de la Memoria por la Verdad y la Justicia"
  },
  {
    date: new Date("2023-04-02"),
    name: "Domingo de Pascua"
  },
  {
    date: new Date("2023-04-13"),
    name: "Día del Trabajador del Poder Judicial"
  },
  {
    date: new Date("2023-04-14"),
    name: "Día del Trabajador del Poder Judicial"
  },
  {
    date: new Date("2023-05-01"),
    name: "Día del Trabajador"
  },
  {
    date: new Date("2023-05-25"),
    name: "Día de la Revolución de Mayo"
  },
  {
    date: new Date("2023-06-17"),
    name: "Paso a la Inmortalidad del General Martín Miguel de Güemes"
  },
  {
    date: new Date("2023-06-19"),
    name: "Paso a la Inmortalidad del General Manuel Belgrano"
  },
  {
    date: new Date("2023-06-20"),
    name: "Día de la Bandera"
  },
  {
    date: new Date("2023-07-09"),
    name: "Día de la Independencia"
  },
  {
    date: new Date("2023-08-17"),
    name: "Paso a la Inmortalidad del General José de San Martín"
  },
  {
    date: new Date("2023-10-09"),
    name: "Día del Respeto a la Diversidad Cultural"
  },
  {
    date: new Date("2023-10-20"),
    name: "Día de la Soberanía Nacional"
  },
  {
    date: new Date("2023-11-27"),
    name: "Día de la Soberanía Nacional (trasladado)"
  },
  {
    date: new Date("2023-12-08"),
    name: "Día de la Inmaculada Concepción"
  },
  {
    date: new Date("2023-12-25"),
    name: "Navidad"
  },
  {
    date: new Date("2023-12-31"),
    name: "Feriado Bancario"
  }
];


const today: Date = new Date();
today.setHours(0, 0, 0, 0); // Establece la hora en 0:00

const sortedHolidays: Holiday[] = HOLIDAYS.sort((a, b) => a.date.getTime() - b.date.getTime());
const nextHoliday: Holiday | undefined = sortedHolidays.find((holiday) => holiday.date > today) || sortedHolidays[0];

console.log(nextHoliday);

const msDiff: number = nextHoliday ? nextHoliday.date.getTime() - today.getTime(): 0;
const dayDiff: number = Math.round(msDiff / 86400000);

console.log(`La diferencia entre las fechas es de ${dayDiff} días.`);

const rtf: Intl.RelativeTimeFormat = new Intl.RelativeTimeFormat('es-AR', {numeric: 'auto'})

function App(): JSX.Element {
  return (
    <main>
      <h1>El próximo feriado ({nextHoliday ? nextHoliday.name: 'No hay próximos feriados'}) es {rtf.format(dayDiff, 'day')}.</h1>
    </main>
  );
};

export default App;