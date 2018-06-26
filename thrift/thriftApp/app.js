window.onload = function () {
    var graphColors1 = ['#427c8b', '#a8cb5e'];

    function formCurrentQuaterGraph() {
        $('#quater-personal-pie').highcharts({
            title: {
                text: ''
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    colors: graphColors1,
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b><br>${point.percentage:.1f}',
                        distance: -25
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'Budget Consumption',
                data: [{
                    name: 'Spend',
                    y: 26.8,
                    sliced: true,
                    selected: true
                },
                ['Remaining', 150.0],

                ]
            }]
        });

        $('#quater-manager-pie').highcharts({
            title: {
                text: ''
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    colors: graphColors1,
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b><br>${point.percentage:.1f}',
                        distance: -25
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'Budget Consumption',
                data: [{
                    name: 'spend',
                    y: 50.80,
                    sliced: true,
                    selected: true
                }, {
                    name: 'Remaning',
                    y: 180
                }
                ]
            }]
        });

        $('#quater-hyderabad-pie').highcharts({
            title: {
                text: ''
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    colors: graphColors1,
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b><br>${point.percentage:.1f}',
                        distance: -25
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'Budget Consumption',
                data: [
                    {
                        name: 'Spend',
                        y: 800.8,
                        sliced: true,
                        selected: true
                    },
                    ['Remaining', 1500.0]
                ]
            }]
        });
    }

    function formPreviousQuaterGraph() {
        $('#p-quater-personal-pie').highcharts({
            title: {
                text: ''
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    colors: graphColors1,
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b><br>${point.percentage:.1f}',
                        distance: -25
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'Budget Consumption',
                data: [
                    {
                        name: 'Spend',
                        y: 90.8,
                        sliced: true,
                        selected: true
                    },
                    ['Remaining', 150.0]

                ]
            }]
        });

        $('#p-quater-manager-pie').highcharts({
            title: {
                text: ''
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    colors: graphColors1,
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b><br>${point.percentage:.1f}',
                        distance: -25
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'Budget Consumption',
                data: [
                    {
                        name: 'Spend',
                        y: 150.8,
                        sliced: true,
                        selected: true
                    },
                    ['Remaining', 180.0]
                ]
            }]
        });

        $('#p-quater-hyderabad-pie').highcharts({
            title: {
                text: '',
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    colors: graphColors1,
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b><br>${point.percentage:.1f}',
                        distance: -25
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'Budget Consumption',
                data: [
                    {
                        name: 'Spend',
                        y: 1200.8,
                        sliced: true,
                        selected: true
                    },
                    ['Remaining', 1500.0]

                ]
            }]
        });
    }

    function formPreviousQuater2Graph() {

        $('#p2-quater-personal-pie').highcharts({
            title: {
                text: ''
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    colors: graphColors1,
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b><br>${point.percentage:.1f}',
                        distance: -25
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'Budget Consumption',
                data: [
                    {
                        name: 'Spend',
                        y: 90.8,
                        sliced: true,
                        selected: true
                    },
                    ['Remaining', 150.0]
                ]
            }]
        });

        $('#p2-quater-manager-pie').highcharts({
            title: {
                text: ''
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    colors: graphColors1,
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b><br>${point.percentage:.1f}',
                        distance: -25
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'Budget Consumption',
                data: [
                    {
                        name: 'Spend',
                        y: 150.8,
                        sliced: true,
                        selected: true
                    },
                    ['Remaining', 180.0]
                ]
            }]
        });

        $('#p2-quater-hyderabad-pie').highcharts({
            title: {
                text: '',
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    colors: graphColors1,
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b><br>${point.percentage:.1f}',
                        distance: -25
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'Budget Consumption',
                data: [
                    {
                        name: 'Spend',
                        y: 1200.8,
                        sliced: true,
                        selected: true
                    },
                    ['Remaining', 1500.0]
                ]
            }]
        });

    }

    function resetGraphs() {
        $('#couponsCart').hide();
        $('#quater-personal-pie').removeClass('move-graph-center');
        $('#q3ProfilePie').removeClass('move-graph-title-center');
        $('#quater-manager-pie').removeClass('move-graph-center');
        $('#q3ManagersPie').removeClass('move-graph-title-center');
        $('#quater-hyderabad-pie').removeClass('move-graph-center');
        $('#q3HyderabadPie').removeClass('move-graph-title-center');
    }
    function showQ3() {
        $('#previous-quater').hide();
        $('#previous-quater2').hide();
        $('#detailsTables').hide();
        resetGraphs();
        $('#graph-section').show();
        $('#quater-personal-pie').show();
        $('#q3ProfilePie').show();
        $('#quater-manager-pie').show();
        $('#q3ManagersPie').show();
        $('#quater-hyderabad-pie').show();
        $('#q3HyderabadPie').show();
    }

    $("#current-quater").hide();
    $("#previous-quater").hide();
    $("#previous-quater2").hide();
    $("#q3PersonalDetails").hide();
    $('#detailsTables').hide();
    $("#headerPane").hide();
    $('#graph-section').hide();
    $('#couponsCart').hide();
    $("#login").click(function () {
        $("#log-in-div").hide();
        $("#previous-quater").hide();
        $('#graph-section').show();
        $("#body").addClass('white-background')
        $("#headerPane").show();
        $("#current-quater").show();
        formCurrentQuaterGraph();
        //formPreviousQuaterGraph();
    });

    $("#showPreviousQuater").click(function () {
        formPreviousQuaterGraph();
        $("#current-quater").hide();
        $("#previous-quater2").hide();
        $("#previous-quater").show();

    });

    $("#showCurrentQuater").click(function () {
        $("#previous-quater").hide();
        $("#previous-quater2").hide();
        $("#current-quater").show();

    });

    $("#showPrevousQuater1").click(function () {
        $("#current-quater").hide();
        $("#previous-quater2").hide();
        $("#previous-quater").show();
    });

    $("#showPrevousQuater2").click(function () {
        formPreviousQuater2Graph();
        $("#current-quater").hide();
        $("#previous-quater").hide();
        $("#previous-quater2").show();
    });

    $('#q3ProfilePie').click(function () {
        $('#quater-manager-pie').hide();
        $('#quater-hyderabad-pie').hide();
        $('#q3ManagersPie').hide();
        $('#q3HyderabadPie').hide();
        $("#q3ManagerDetails").hide();
        $('#q3HyderabadDetails').hide();
        $('#quater-personal-pie').addClass('move-graph-center');
        $('#q3ProfilePie').addClass('move-graph-title-center');
        $('#detailsTables').show();
        $("#q3PersonalDetails").show();
    });

    $('#q3ManagersPie').click(function () {
        $('#quater-personal-pie').hide();
        $('#quater-hyderabad-pie').hide();
        $('#q3ProfilePie').hide();
        $('#q3HyderabadPie').hide();
        $("#q3PersonalDetails").hide();
        $('#q3HyderabadDetails').hide();
        $('#quater-manager-pie').addClass('move-graph-center');
        $('#q3ManagersPie').addClass('move-graph-title-center');
        $('#detailsTables').show();
        $("#q3ManagerDetails").show();
    });

    $('#q3HyderabadPie').click(function () {
        $('#quater-personal-pie').hide();
        $('#quater-manager-pie').hide();
        $('#q3ManagersPie').hide();
        $('#q3ProfilePie').hide();
        $("#q3ManagerDetails").hide();
        $('#quater-hyderabad-pie').addClass('move-graph-center');
        $('#q3HyderabadPie').addClass('move-graph-title-center');
        $('#detailsTables').show();
        $("#q3HyderabadDetails").show();
    });

    $('#navLogo').click(function(){
        showQ3()
    });

    $('#redeemNow').click(function(){
        $('#graph-section').hide();
        $('#couponsCart').show();
    })
}
