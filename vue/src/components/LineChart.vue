<template>
  <div>
    <Line v-if="loaded" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import { Line } from 'vue-chartjs';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);


export default {
    name: "LineChart",
    components: { Line },
    data() {
        return {
            loaded: false,
            chartData: {
                labels: [],
                datasets: [
                    {
                        label: "Brooklyn",
                        data: [],
                        borderColor: "rgb(255, 99, 132)",
                        backgroundColor: "rgba(255, 99, 132, 0.2)",
                    },
                    {
                        label: "Queens",
                        data: [],
                        borderColor: "rgb(54, 162, 235)",
                        backgroundColor: "rgba(54, 162, 235, 0.2)",
                    },
                    {
                        label: "Bronx",
                        data: [],
                        borderColor: "rgb(255, 206, 86)",
                        backgroundColor: "rgba(255, 206, 86, 0.2)",
                    },
                    {
                        label: "Manhattan",
                        data: [],
                        borderColor: "rgb(153, 102, 255)",
                        backgroundColor: "rgba(153, 102, 255, 0.2)",
                    },
                    {
                        label: "Staten Island",
                        data: [],
                        borderColor: "rgb(75, 192, 192)",
                        backgroundColor: "rgba(75, 192, 192, 0.2)",
                    },
                ]
            },
            chartOptions: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: "Popuation Trend By Borough",
                    },
                    legend: {
                        position: "bottom",
                    },
                    
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: "Decade",
                        },
                        min: 1950,
                        max: 2020,
                        ticks: {
                            stepSize: 10,
                        },

                    },
                    y: {
                        min: 0,
                        max: 3125000,
                        ticks: {
                            stepSize: 125000,
                        }
                    }
                }

            }

        }
    },
    mounted: async function () {
        await this.getData;
        this.loaded = true;
    },

    methods: {
        getData: async function() {
            try {
                let res = await fetch(`https://data.cityofnewyork.us/resource/xywu-7bv9.json`);
                let data = await res.json();
                console.log(data);

                const years = ["1950", "1960", "1970", "1980", "1990", "2000", "2010", "2020"]
                this.chartData.labels = years;
                const boroughs = ['Brooklyn', 'Queens', 'Bronx', 'Manhattan', 'Staten Island']
                
                // for (let i = 0; i < years.length; i++) {
                //     data.find((element) => element.borough.[0]);
                //     this.chartData.datasets[0].data[0] = Brooklyn;
                //     this.chartData.datasets[1].data[0] = Queens;
                    
                //     }
            
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
    }

}




</script>

<style lang="scss" scoped></style>
