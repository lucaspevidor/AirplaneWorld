| airport | object |
| --- | --- |
| id | integer [PK] |
| name | string |
| code | string [UNIQUE] |
| coordinates | object |
| latitude | float |
| longitude | float |
| runways | object[] |
| routes | object[] |
| departing_flights | object[] |
| arriving_flights | object[] |
| aircrafts | object[] |

| runway | object |
| --- | --- |
| id | int [PK] |
| number | integer |
| length | float |
| width | float |
| heading | float |

| route | object |
| --- | --- |
| id | int [PK] |
| origin | airport |
| destination | airport |
| alternate | airport |

| flight | object |
| --- | --- |
| id | int [PK] |
| route | route |
| aircraft | aircraft |
| departure | datetime |
| arrival | datetime |
| status | flight_status |

| flight_status | id |
| --- | --- |
| scheduled | 0 |
| boarding | 1 |
| taxiing | 2 |
| taking_off | 3 |
| flying | 4 |
| landing | 5 |
| landed | 6 |
| taxiing_to_gate | 7 |
| arrived | 8 |
| canceled | 9 |
| delayed | 10 |
| diverted | 11 |
| incident | 12 |
| accident | 13 |

| aircraft_size | id |
| --- | --- |
| very_small | 0 |
| small | 1 |
| medium | 2 |
| large | 3 |
| very_large | 4 |

| aircraft_category | id |
| --- | --- |
| civilian | 0 |
| military | 1 |

| aircraft_prop_type | id |
| --- | --- |
| single_engine | 0 |
| multi_engine | 1 |
| glider | 2 |
| helicopter | 3 |
| lighter_than_air | 4 |

| aircraft_prop_subtype | id | aircraft_prop_type[] |
| --- | --- | --- |
| piston | 0 | single_engine, multi_engine |
| turbo_prop | 1 | single_engine, multi_engine |
| turbo_shaft | 2 | helicopter |
| turbo_jet | 3 | single_engine, multi_engine |
| turbo_fan | 4 | single_engine, multi_engine |
| ramjet | 5 | single_engine, multi_engine |
| rocket | 6 | single_engine, multi_engine |
| ground_effect | 7 | single_engine, multi_engine |
| amphibian | 8 | single_engine, multi_engine |
| tiltwing | 9 | single_engine, multi_engine |
| tail_sitter | 10 | single_engine, multi_engine |
| tiltrotor | 11 | single_engine, multi_engine |
| glider | 12 | glider |
| parafoil | 13 | glider |
| paraglider | 14 | glider |
| hang_glider | 15 | glider |
| balloon | 16 | lighter_than_air |
| airship | 17 | lighter_than_air |
| gyrocopter | 18 | helicopter |
| ornithopter | 19 | single_engine, multi_engine |
| uav | 20 | single_engine, multi_engine
| space | 21 | single_engine, multi_engine |

| aircraft_mission | id | aircraft_category[] |
| --- | --- | --- |
| transport | 0 | civilian, military |
| attack | 1 | military |
| bomber | 2 | military |
| fighter | 3 | military |
| reconnaissance | 4 | military |
| patrol | 5 | military |
| trainer | 6 | civilian, military |
| experimental | 7 | civilian, military |
| mail | 8 | civilian |
| cargo | 9 | civilian, military |
| rescue | 10 | civilian, military |
| fire_fighting | 11 | civilian, military |
| bush | 12 | civilian |
| sport | 13 | civilian |
| awacs | 14 | military |
| tanker | 15 | military |
| recreational | 16 | civilian |
| agricultural | 18 | civilian |
| research | 19 | civilian, military |

| aircraft_model | object |
| --- | --- |
| id | integer [PK] |
| name | string |
| capacity | integer |
| manufacturer | string |
| size | aircraft_size |
| category | aircraft_category[] |
| prop_type | aircraft_prop_type |
| prop_subtype | aircraft_prop_subtype |
| available_missions | aircraft_mission[] |
| gross_weight | float |
| fuel_capacity | float |
| efficiency | float |
| max_speed | float |
| max_height | float |
| max_weight | float |

| aircraft | object |
| --- | --- |
| id | integer [PK] |
| tail_code | string |
| model | aircraft_model |
| year | integer |
| status | string |