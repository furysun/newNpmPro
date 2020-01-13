export function task11() {
    console.log('task11');
    countSezons();

}

function countSezons() {
    const walkingDeadData = {

        'id': 73,
        'url': 'http://www.tvmaze.com/shows/73/the-walking-dead',
        'name': 'The Walking Dead',
        'type': 'Scripted',
        'language': 'English',
        'genres': [
            'Drama',
            'Action',
            'Horror'
        ],
        'status': 'Running',
        'runtime': 60,
        'premiered': '2010-10-31',
        'officialSite': 'http://www.amc.com/shows/the-walking-dead',
        'schedule': {
            'time': '21:00',
            'days': [
                'Sunday'
            ]
        },
        'rating': {
            'average': 8.1
        },
        'weight': 99,
        'network': {
            'id': 20,
            'name': 'AMC',
            'country': {
                'name': 'United States',
                'code': 'US',
                'timezone': 'America/New_York'
            }
        },
        'webChannel': null,
        'externals': {
            'tvrage': 25056,
            'thetvdb': 153021,
            'imdb': 'tt1520211'
        },
        'image': {
            'medium': 'http://static.tvmaze.com/uploads/images/medium_portrait/208/521870.jpg',
            'original': 'http://static.tvmaze.com/uploads/images/original_untouched/208/521870.jpg'
        },
        'summary': '<p><b>The Walking Dead</b> tells the story of the months and years that follow after a zombie apocalypse. It follows a group of survivors, led by former police officer Rick Grimes, who travel in search of a safe and secure home. As the world overrun by the dead takes its toll on the survivors, their interpersonal conflicts present a greater danger to their continuing survival than the walkers that roam the country. Over time, the characters are changed by the constant exposure to death and some grow willing to do anything to survive.</p><p>Based on the comic book series of the same name by Robert Kirkman, Tony Moore, and Charlie Adlard.</p>',
        'updated': 1578668272,
        '_links': {
            'self': {
                'href': 'http://api.tvmaze.com/shows/73'
            },
            'previousepisode': {
                'href': 'http://api.tvmaze.com/episodes/1717807'
            },
            'nextepisode': {
                'href': 'http://api.tvmaze.com/episodes/1762852'
            }
        },
        '_embedded': {
            'episodes': [
                {
                    'id': 4095,
                    'url': 'http://www.tvmaze.com/episodes/4095/the-walking-dead-1x01-days-gone-bye',
                    'name': 'Days Gone Bye',
                    'season': 1,
                    'number': 1,
                    'airdate': '2010-10-31',
                    'airtime': '22:00',
                    'airstamp': '2010-11-01T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/0/2104.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/0/2104.jpg'
                    },
                    'summary': '<p>Rick searches for his family after emerging from a coma into a world terrorized by the walking dead. Morgan and Duane, whom he meets along the way, help teach Rick the new rules for survival.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4095'
                        }
                    }
                },
                {
                    'id': 4096,
                    'url': 'http://www.tvmaze.com/episodes/4096/the-walking-dead-1x02-guts',
                    'name': 'Guts',
                    'season': 1,
                    'number': 2,
                    'airdate': '2010-11-07',
                    'airtime': '22:00',
                    'airstamp': '2010-11-08T03:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3424.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3424.jpg'
                    },
                    'summary': '<p>Rick unknowingly causes a group of survivors to be trapped by walkers. The group dynamic devolves from accusations to violence, as Rick must confront an enemy far more dangerous than the undead.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4096'
                        }
                    }
                },
                {
                    'id': 4097,
                    'url': 'http://www.tvmaze.com/episodes/4097/the-walking-dead-1x03-tell-it-to-the-frogs',
                    'name': 'Tell It to the Frogs',
                    'season': 1,
                    'number': 3,
                    'airdate': '2010-11-14',
                    'airtime': '22:00',
                    'airstamp': '2010-11-15T03:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3425.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3425.jpg'
                    },
                    'summary': '<p>Rick makes a decision to go back to Atlanta to retrieve the bag of guns and save a man\'s life. Lori and Shane must deal with the surprising return of someone they thought was dead.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4097'
                        }
                    }
                },
                {
                    'id': 4098,
                    'url': 'http://www.tvmaze.com/episodes/4098/the-walking-dead-1x04-vatos',
                    'name': 'Vatos',
                    'season': 1,
                    'number': 4,
                    'airdate': '2010-11-21',
                    'airtime': '22:00',
                    'airstamp': '2010-11-22T03:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3426.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3426.jpg'
                    },
                    'summary': '<p>Rick\'s mission to Atlanta is jeopardized when things go awry. Jim becomes unhinged in camp.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4098'
                        }
                    }
                },
                {
                    'id': 4099,
                    'url': 'http://www.tvmaze.com/episodes/4099/the-walking-dead-1x05-wildfire',
                    'name': 'Wildfire',
                    'season': 1,
                    'number': 5,
                    'airdate': '2010-11-28',
                    'airtime': '22:00',
                    'airstamp': '2010-11-29T03:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3427.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3427.jpg'
                    },
                    'summary': '<p>Rick leads the group to the CDC after the attack. Jim must make a terrible life and death decision</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4099'
                        }
                    }
                },
                {
                    'id': 4100,
                    'url': 'http://www.tvmaze.com/episodes/4100/the-walking-dead-1x06-ts-19',
                    'name': 'TS-19',
                    'season': 1,
                    'number': 6,
                    'airdate': '2010-12-05',
                    'airtime': '22:00',
                    'airstamp': '2010-12-06T03:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3428.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3428.jpg'
                    },
                    'summary': '<p>Rick and the group are allowed into the CDC by a strange doctor. But all is not what it seems in their newfound haven.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4100'
                        }
                    }
                },
                {
                    'id': 4101,
                    'url': 'http://www.tvmaze.com/episodes/4101/the-walking-dead-2x01-what-lies-ahead',
                    'name': 'What Lies Ahead',
                    'season': 2,
                    'number': 1,
                    'airdate': '2011-10-16',
                    'airtime': '21:00',
                    'airstamp': '2011-10-17T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3429.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3429.jpg'
                    },
                    'summary': '<p>After the CDC explosion, the survivors are still on the move when they encounter a herd of walkers that separates one of their own, leading them to a possible safe haven.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4101'
                        }
                    }
                },
                {
                    'id': 4102,
                    'url': 'http://www.tvmaze.com/episodes/4102/the-walking-dead-2x02-bloodletting',
                    'name': 'Bloodletting',
                    'season': 2,
                    'number': 2,
                    'airdate': '2011-10-23',
                    'airtime': '21:00',
                    'airstamp': '2011-10-24T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3430.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3430.jpg'
                    },
                    'summary': '<p>Coming to the aid of another, Rick discovers a possible safe haven. Shane must go on a dangerous mission to get badly needed medical supplies.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4102'
                        }
                    }
                },
                {
                    'id': 4103,
                    'url': 'http://www.tvmaze.com/episodes/4103/the-walking-dead-2x03-save-the-last-one',
                    'name': 'Save the Last One',
                    'season': 2,
                    'number': 3,
                    'airdate': '2011-10-30',
                    'airtime': '21:00',
                    'airstamp': '2011-10-31T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3431.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3431.jpg'
                    },
                    'summary': '<p>The group desperately awaits Shane\'s return. Shane finds himself trapped in a school, surrounded by the undead. Daryl and Andrea search for someone in the woods.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4103'
                        }
                    }
                },
                {
                    'id': 4104,
                    'url': 'http://www.tvmaze.com/episodes/4104/the-walking-dead-2x04-cherokee-rose',
                    'name': 'Cherokee Rose',
                    'season': 2,
                    'number': 4,
                    'airdate': '2011-11-06',
                    'airtime': '21:00',
                    'airstamp': '2011-11-07T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3432.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3432.jpg'
                    },
                    'summary': '<p>Shane makes a deadly sacrifice which leads to unusual behavior and self-distancing. The rest of the group tries to hang on somewhere between living to die and dying to live.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4104'
                        }
                    }
                },
                {
                    'id': 4105,
                    'url': 'http://www.tvmaze.com/episodes/4105/the-walking-dead-2x05-chupacabra',
                    'name': 'Chupacabra',
                    'season': 2,
                    'number': 5,
                    'airdate': '2011-11-13',
                    'airtime': '21:00',
                    'airstamp': '2011-11-14T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3433.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3433.jpg'
                    },
                    'summary': '<p>Glenn, the only one breaking barriers between both groups, knows far too much for his comfort level. Daryl finds a sign of life and, in his delirium, tries to make it back to the farm alive.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4105'
                        }
                    }
                },
                {
                    'id': 4106,
                    'url': 'http://www.tvmaze.com/episodes/4106/the-walking-dead-2x06-secrets',
                    'name': 'Secrets',
                    'season': 2,
                    'number': 6,
                    'airdate': '2011-11-20',
                    'airtime': '21:00',
                    'airstamp': '2011-11-21T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3434.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3434.jpg'
                    },
                    'summary': '<p>Secrets are told and secrets are revealed. Hershel refuses to acknowledge the world’s new reality. Andrea comes out of her shell. Everyone is becoming more and more aware that “everything is food for something.”</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4106'
                        }
                    }
                },
                {
                    'id': 4107,
                    'url': 'http://www.tvmaze.com/episodes/4107/the-walking-dead-2x07-pretty-much-dead-already',
                    'name': 'Pretty Much Dead Already',
                    'season': 2,
                    'number': 7,
                    'airdate': '2011-11-27',
                    'airtime': '21:00',
                    'airstamp': '2011-11-28T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3435.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3435.jpg'
                    },
                    'summary': '<p>Hershel sets a deadline. All secrets are out in the open. Glenn stands up for himself and Shane takes charge.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4107'
                        }
                    }
                },
                {
                    'id': 4108,
                    'url': 'http://www.tvmaze.com/episodes/4108/the-walking-dead-2x08-nebraska',
                    'name': 'Nebraska',
                    'season': 2,
                    'number': 8,
                    'airdate': '2012-02-12',
                    'airtime': '21:00',
                    'airstamp': '2012-02-13T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3436.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3436.jpg'
                    },
                    'summary': '<p>Rick and the others try to restore order in the aftermath of a terrible discovery. Hershel takes up an old habit and disappears, Rick and Glenn must follow him into town.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4108'
                        }
                    }
                },
                {
                    'id': 4109,
                    'url': 'http://www.tvmaze.com/episodes/4109/the-walking-dead-2x09-triggerfinger',
                    'name': 'Triggerfinger',
                    'season': 2,
                    'number': 9,
                    'airdate': '2012-02-19',
                    'airtime': '21:00',
                    'airstamp': '2012-02-20T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3437.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3437.jpg'
                    },
                    'summary': '<p>Trapped, Rick, Hershel and Glenn fight to survive against new foes, both dead and alive. Shane finds Lori in danger on the road and makes it his mission to bring her back to the farm.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4109'
                        }
                    }
                },
                {
                    'id': 4110,
                    'url': 'http://www.tvmaze.com/episodes/4110/the-walking-dead-2x10-18-miles-out',
                    'name': '18 Miles Out',
                    'season': 2,
                    'number': 10,
                    'airdate': '2012-02-26',
                    'airtime': '21:00',
                    'airstamp': '2012-02-27T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3438.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3438.jpg'
                    },
                    'summary': '<p>Rick and Shane come into conflict over the fate of an outsider. Andrea helps Hershel\'s youngest daughter face a crucial decision.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4110'
                        }
                    }
                },
                {
                    'id': 4111,
                    'url': 'http://www.tvmaze.com/episodes/4111/the-walking-dead-2x11-judge-jury-executioner',
                    'name': 'Judge, Jury, Executioner',
                    'season': 2,
                    'number': 11,
                    'airdate': '2012-03-04',
                    'airtime': '21:00',
                    'airstamp': '2012-03-05T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3439.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3439.jpg'
                    },
                    'summary': '<p>Rick sides with Shane on an important decision, causing Dale to worry that the group is losing its humanity. Carl\'s actions have unintended consequences on the group.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4111'
                        }
                    }
                },
                {
                    'id': 4112,
                    'url': 'http://www.tvmaze.com/episodes/4112/the-walking-dead-2x12-better-angels',
                    'name': 'Better Angels',
                    'season': 2,
                    'number': 12,
                    'airdate': '2012-03-11',
                    'airtime': '21:00',
                    'airstamp': '2012-03-12T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3441.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3441.jpg'
                    },
                    'summary': '<p>The group learns that someone dangerous may be on the loose near the farm. As night falls, Rick, Shane, Daryl and Glenn comb the woods to handle the situation and keep the group safe.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4112'
                        }
                    }
                },
                {
                    'id': 4113,
                    'url': 'http://www.tvmaze.com/episodes/4113/the-walking-dead-2x13-beside-the-dying-fire',
                    'name': 'Beside the Dying Fire',
                    'season': 2,
                    'number': 13,
                    'airdate': '2012-03-18',
                    'airtime': '21:00',
                    'airstamp': '2012-03-19T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3443.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3443.jpg'
                    },
                    'summary': '<p>Rick and Carl return from the woods to find the farm in jeopardy. The group is split up in the ensuing chaos. With things looking grim, Rick’s leadership is questioned.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4113'
                        }
                    }
                },
                {
                    'id': 4114,
                    'url': 'http://www.tvmaze.com/episodes/4114/the-walking-dead-3x01-seed',
                    'name': 'Seed',
                    'season': 3,
                    'number': 1,
                    'airdate': '2012-10-14',
                    'airtime': '21:00',
                    'airstamp': '2012-10-15T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3444.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3444.jpg'
                    },
                    'summary': '<p>With the world growing increasingly more dangerous and Lori’s pregnancy advancing, Rick discovers a potentially safe haven. But first he must secure the premises, pushing his group to its limit.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4114'
                        }
                    }
                },
                {
                    'id': 4115,
                    'url': 'http://www.tvmaze.com/episodes/4115/the-walking-dead-3x02-sick',
                    'name': 'Sick',
                    'season': 3,
                    'number': 2,
                    'airdate': '2012-10-21',
                    'airtime': '21:00',
                    'airstamp': '2012-10-22T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3446.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3446.jpg'
                    },
                    'summary': '<p>After a traumatic event, a life hangs in the balance. Complicating matters, the group must also deal with a potential threat to their new surroundings.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4115'
                        }
                    }
                },
                {
                    'id': 4116,
                    'url': 'http://www.tvmaze.com/episodes/4116/the-walking-dead-3x03-walk-with-me',
                    'name': 'Walk with Me',
                    'season': 3,
                    'number': 3,
                    'airdate': '2012-10-28',
                    'airtime': '21:00',
                    'airstamp': '2012-10-29T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3448.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3448.jpg'
                    },
                    'summary': '<p>After witnessing an accident, Andrea and Michonne are introduced to a new community of survivors. As conflicts arise with their new acquaintances, a decision must be made.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4116'
                        }
                    }
                },
                {
                    'id': 4117,
                    'url': 'http://www.tvmaze.com/episodes/4117/the-walking-dead-3x04-killer-within',
                    'name': 'Killer Within',
                    'season': 3,
                    'number': 4,
                    'airdate': '2012-11-04',
                    'airtime': '21:00',
                    'airstamp': '2012-11-05T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3449.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3449.jpg'
                    },
                    'summary': '<p>The group is severed and lives are put in jeopardy. In Woodbury, Merle has a request for the Governor.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4117'
                        }
                    }
                },
                {
                    'id': 4118,
                    'url': 'http://www.tvmaze.com/episodes/4118/the-walking-dead-3x05-say-the-word',
                    'name': 'Say the Word',
                    'season': 3,
                    'number': 5,
                    'airdate': '2012-11-11',
                    'airtime': '21:00',
                    'airstamp': '2012-11-12T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3450.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3450.jpg'
                    },
                    'summary': '<p>After another loss, Rick struggles. Michonne remains suspicious of the Governor as he throws a party with a unique twist for the people of Woodbury.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4118'
                        }
                    }
                },
                {
                    'id': 4119,
                    'url': 'http://www.tvmaze.com/episodes/4119/the-walking-dead-3x06-hounded',
                    'name': 'Hounded',
                    'season': 3,
                    'number': 6,
                    'airdate': '2012-11-18',
                    'airtime': '21:00',
                    'airstamp': '2012-11-19T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3451.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3451.jpg'
                    },
                    'summary': '<p>As Andrea grows closer to the Governor, Michonne makes a decision about Woodbury. Glenn and Maggie go on a run. Rick struggles.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4119'
                        }
                    }
                },
                {
                    'id': 4120,
                    'url': 'http://www.tvmaze.com/episodes/4120/the-walking-dead-3x07-when-the-dead-come-knocking',
                    'name': 'When the Dead Come Knocking',
                    'season': 3,
                    'number': 7,
                    'airdate': '2012-11-25',
                    'airtime': '21:00',
                    'airstamp': '2012-11-26T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3453.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3453.jpg'
                    },
                    'summary': '<p>The Governor presses for information. A new guest arrives at the prison, forcing Rick\'s hand.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4120'
                        }
                    }
                },
                {
                    'id': 4121,
                    'url': 'http://www.tvmaze.com/episodes/4121/the-walking-dead-3x08-made-to-suffer',
                    'name': 'Made to Suffer',
                    'season': 3,
                    'number': 8,
                    'airdate': '2012-12-02',
                    'airtime': '21:00',
                    'airstamp': '2012-12-03T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3456.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3456.jpg'
                    },
                    'summary': '<p>Andrea steps up as the people of Woodbury are thrown into uncharted territory. At the prison, a new threat arises.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4121'
                        }
                    }
                },
                {
                    'id': 4122,
                    'url': 'http://www.tvmaze.com/episodes/4122/the-walking-dead-3x09-the-suicide-king',
                    'name': 'The Suicide King',
                    'season': 3,
                    'number': 9,
                    'airdate': '2013-02-10',
                    'airtime': '21:00',
                    'airstamp': '2013-02-11T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3458.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3458.jpg'
                    },
                    'summary': '<p>Rick tries to rescue a member of his group. Woodbury is in disarray after a recent attack. New guests raise concerns at the prison.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4122'
                        }
                    }
                },
                {
                    'id': 4123,
                    'url': 'http://www.tvmaze.com/episodes/4123/the-walking-dead-3x10-home',
                    'name': 'Home',
                    'season': 3,
                    'number': 10,
                    'airdate': '2013-02-17',
                    'airtime': '21:00',
                    'airstamp': '2013-02-18T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3459.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3459.jpg'
                    },
                    'summary': '<p>As the group debates their next course of action, Rick wanders after a lost friend. Daryl and Merle question their choices. The Governor restores order in Woodbury and makes plans to punish those responsible.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4123'
                        }
                    }
                },
                {
                    'id': 4124,
                    'url': 'http://www.tvmaze.com/episodes/4124/the-walking-dead-3x11-i-aint-a-judas',
                    'name': 'I Ain\'t a Judas',
                    'season': 3,
                    'number': 11,
                    'airdate': '2013-02-24',
                    'airtime': '21:00',
                    'airstamp': '2013-02-25T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3461.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3461.jpg'
                    },
                    'summary': '<p>Their security threatened, Rick and the group must make a choice. With Woodbury in a police state, Andrea grows uneasy.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4124'
                        }
                    }
                },
                {
                    'id': 4125,
                    'url': 'http://www.tvmaze.com/episodes/4125/the-walking-dead-3x12-clear',
                    'name': 'Clear',
                    'season': 3,
                    'number': 12,
                    'airdate': '2013-03-03',
                    'airtime': '21:00',
                    'airstamp': '2013-03-04T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3462.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3462.jpg'
                    },
                    'summary': '<p>Realizing they are heavily outgunned against the Governor\'s forces, Rick leads an expedition to get more weapons.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4125'
                        }
                    }
                },
                {
                    'id': 4126,
                    'url': 'http://www.tvmaze.com/episodes/4126/the-walking-dead-3x13-arrow-on-the-doorpost',
                    'name': 'Arrow on the Doorpost',
                    'season': 3,
                    'number': 13,
                    'airdate': '2013-03-10',
                    'airtime': '21:00',
                    'airstamp': '2013-03-11T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3463.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3463.jpg'
                    },
                    'summary': '<p>In an effort to prevent any more deaths, Rick and the Governor meet to come up with a peace treaty.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4126'
                        }
                    }
                },
                {
                    'id': 4127,
                    'url': 'http://www.tvmaze.com/episodes/4127/the-walking-dead-3x14-prey',
                    'name': 'Prey',
                    'season': 3,
                    'number': 14,
                    'airdate': '2013-03-17',
                    'airtime': '21:00',
                    'airstamp': '2013-03-18T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3465.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3465.jpg'
                    },
                    'summary': '<p>The Governor chases a dissenter who fled Woodbury. While the Governor is gone, a traitor tries to sabotage his upcoming plans.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4127'
                        }
                    }
                },
                {
                    'id': 4128,
                    'url': 'http://www.tvmaze.com/episodes/4128/the-walking-dead-3x15-this-sorrowful-life',
                    'name': 'This Sorrowful Life',
                    'season': 3,
                    'number': 15,
                    'airdate': '2013-03-24',
                    'airtime': '21:00',
                    'airstamp': '2013-03-25T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3466.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3466.jpg'
                    },
                    'summary': '<p>Rick and the group are faced with a serious problem. If they want a truce with the Governor, they will have to make a huge sacrifice.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4128'
                        }
                    }
                },
                {
                    'id': 4129,
                    'url': 'http://www.tvmaze.com/episodes/4129/the-walking-dead-3x16-welcome-to-the-tombs',
                    'name': 'Welcome to the Tombs',
                    'season': 3,
                    'number': 16,
                    'airdate': '2013-03-31',
                    'airtime': '21:00',
                    'airstamp': '2013-04-01T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3467.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3467.jpg'
                    },
                    'summary': '<p>Rick and the group have to seriously consider if the prison is worth defending as the Governor\'s impending attack looms over their heads.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4129'
                        }
                    }
                },
                {
                    'id': 4130,
                    'url': 'http://www.tvmaze.com/episodes/4130/the-walking-dead-4x01-30-days-without-an-accident',
                    'name': '30 Days Without an Accident',
                    'season': 4,
                    'number': 1,
                    'airdate': '2013-10-13',
                    'airtime': '21:00',
                    'airstamp': '2013-10-14T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3468.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3468.jpg'
                    },
                    'summary': '<p>Rick and the group are as close to an ideal life as possible at the prison. Will they be able to hold on to humanity in the face of a new evil?</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4130'
                        }
                    }
                },
                {
                    'id': 4131,
                    'url': 'http://www.tvmaze.com/episodes/4131/the-walking-dead-4x02-infected',
                    'name': 'Infected',
                    'season': 4,
                    'number': 2,
                    'airdate': '2013-10-20',
                    'airtime': '21:00',
                    'airstamp': '2013-10-21T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3469.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3469.jpg'
                    },
                    'summary': '<p>As the group faces a brand new enemy, Rick and the others must fight to protect the livelihood they worked so hard to create at the prison.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4131'
                        }
                    }
                },
                {
                    'id': 4132,
                    'url': 'http://www.tvmaze.com/episodes/4132/the-walking-dead-4x03-isolation',
                    'name': 'Isolation',
                    'season': 4,
                    'number': 3,
                    'airdate': '2013-10-27',
                    'airtime': '21:00',
                    'airstamp': '2013-10-28T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3470.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3470.jpg'
                    },
                    'summary': '<p>As one group leaves the prison in search for supplies at a local college, those who stay must deal with recent losses while preserving what remains.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4132'
                        }
                    }
                },
                {
                    'id': 4133,
                    'url': 'http://www.tvmaze.com/episodes/4133/the-walking-dead-4x04-indifference',
                    'name': 'Indifference',
                    'season': 4,
                    'number': 4,
                    'airdate': '2013-11-03',
                    'airtime': '21:00',
                    'airstamp': '2013-11-04T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3471.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3471.jpg'
                    },
                    'summary': '<p>While on a supplies mission to a local college, members of the group run into multiple hurdles. Things at the prison are getting worse.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4133'
                        }
                    }
                },
                {
                    'id': 4134,
                    'url': 'http://www.tvmaze.com/episodes/4134/the-walking-dead-4x05-internment',
                    'name': 'Internment',
                    'season': 4,
                    'number': 5,
                    'airdate': '2013-11-10',
                    'airtime': '21:00',
                    'airstamp': '2013-11-11T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3472.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3472.jpg'
                    },
                    'summary': '<p>Multiple enemies put pressure on Rick and the group. Could this finally be the breaking point for the survivors and the prison?</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4134'
                        }
                    }
                },
                {
                    'id': 4135,
                    'url': 'http://www.tvmaze.com/episodes/4135/the-walking-dead-4x06-live-bait',
                    'name': 'Live Bait',
                    'season': 4,
                    'number': 6,
                    'airdate': '2013-11-17',
                    'airtime': '21:00',
                    'airstamp': '2013-11-18T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3473.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3473.jpg'
                    },
                    'summary': '<p>A familiar face returns as each member of the group struggles to find his or her humanity in a world of constant threats.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4135'
                        }
                    }
                },
                {
                    'id': 4136,
                    'url': 'http://www.tvmaze.com/episodes/4136/the-walking-dead-4x07-dead-weight',
                    'name': 'Dead Weight',
                    'season': 4,
                    'number': 7,
                    'airdate': '2013-11-24',
                    'airtime': '21:00',
                    'airstamp': '2013-11-25T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3474.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3474.jpg'
                    },
                    'summary': '<p>A new and scary chapter is unfolding at a camp outside the prison. Will peace be attainable with the addition of new members?</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4136'
                        }
                    }
                },
                {
                    'id': 4137,
                    'url': 'http://www.tvmaze.com/episodes/4137/the-walking-dead-4x08-too-far-gone',
                    'name': 'Too Far Gone',
                    'season': 4,
                    'number': 8,
                    'airdate': '2013-12-01',
                    'airtime': '21:00',
                    'airstamp': '2013-12-02T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3475.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3475.jpg'
                    },
                    'summary': '<p>Just when everything started to calm down at the prison, Rick and his group now face imminent danger and destruction. This time, they might not win.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4137'
                        }
                    }
                },
                {
                    'id': 4138,
                    'url': 'http://www.tvmaze.com/episodes/4138/the-walking-dead-4x09-after',
                    'name': 'After',
                    'season': 4,
                    'number': 9,
                    'airdate': '2014-02-09',
                    'airtime': '21:00',
                    'airstamp': '2014-02-10T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3476.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3476.jpg'
                    },
                    'summary': '<p>As Rick deals with old wounds, members of the prison have to come to terms with their new environment and ask themselves if survival alone is enough.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4138'
                        }
                    }
                },
                {
                    'id': 4139,
                    'url': 'http://www.tvmaze.com/episodes/4139/the-walking-dead-4x10-inmates',
                    'name': 'Inmates',
                    'season': 4,
                    'number': 10,
                    'airdate': '2014-02-16',
                    'airtime': '21:00',
                    'airstamp': '2014-02-17T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3477.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3477.jpg'
                    },
                    'summary': '<p>The group encounters many obstacles in their quest to find stability and safety, but sometimes all they have to guide them is hope.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4139'
                        }
                    }
                },
                {
                    'id': 4140,
                    'url': 'http://www.tvmaze.com/episodes/4140/the-walking-dead-4x11-claimed',
                    'name': 'Claimed',
                    'season': 4,
                    'number': 11,
                    'airdate': '2014-02-23',
                    'airtime': '21:00',
                    'airstamp': '2014-02-24T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3478.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3478.jpg'
                    },
                    'summary': '<p>The group encounters many obstacles in their quest to find stability and safety, but sometimes all they have to guide them is hope.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4140'
                        }
                    }
                },
                {
                    'id': 4141,
                    'url': 'http://www.tvmaze.com/episodes/4141/the-walking-dead-4x12-still',
                    'name': 'Still',
                    'season': 4,
                    'number': 12,
                    'airdate': '2014-03-02',
                    'airtime': '21:00',
                    'airstamp': '2014-03-03T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3479.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3479.jpg'
                    },
                    'summary': '<p>Faced with the day-to-day survival of life outside shelter, a simple request by someone in the group leads to a bizarre but enlightening mission.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4141'
                        }
                    }
                },
                {
                    'id': 4142,
                    'url': 'http://www.tvmaze.com/episodes/4142/the-walking-dead-4x13-alone',
                    'name': 'Alone',
                    'season': 4,
                    'number': 13,
                    'airdate': '2014-03-09',
                    'airtime': '21:00',
                    'airstamp': '2014-03-10T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3480.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3480.jpg'
                    },
                    'summary': '<p>As one group finds what may be an ideal shelter, another group comes to realize that the best protection comes from those around them.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4142'
                        }
                    }
                },
                {
                    'id': 4143,
                    'url': 'http://www.tvmaze.com/episodes/4143/the-walking-dead-4x14-the-grove',
                    'name': 'The Grove',
                    'season': 4,
                    'number': 14,
                    'airdate': '2014-03-16',
                    'airtime': '21:00',
                    'airstamp': '2014-03-17T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3481.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3481.jpg'
                    },
                    'summary': '<p>After finding an idyllic place to establish a new shelter, the group starts to question whether it is possible to go back to the way things were.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4143'
                        }
                    }
                },
                {
                    'id': 4144,
                    'url': 'http://www.tvmaze.com/episodes/4144/the-walking-dead-4x15-us',
                    'name': 'Us',
                    'season': 4,
                    'number': 15,
                    'airdate': '2014-03-23',
                    'airtime': '21:00',
                    'airstamp': '2014-03-24T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3482.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3482.jpg'
                    },
                    'summary': '<p>However brutal some survivors believe they must be to stay alive, we get to see that faith can sometimes be the strongest survival tool.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4144'
                        }
                    }
                },
                {
                    'id': 4145,
                    'url': 'http://www.tvmaze.com/episodes/4145/the-walking-dead-4x16-a',
                    'name': 'A',
                    'season': 4,
                    'number': 16,
                    'airdate': '2014-03-30',
                    'airtime': '21:00',
                    'airstamp': '2014-03-31T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/3483.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/3483.jpg'
                    },
                    'summary': '<p>As multiple paths collide, Rick comes face to face with sheer brutality. Will he and the group have what it takes to survive?</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4145'
                        }
                    }
                },
                {
                    'id': 4146,
                    'url': 'http://www.tvmaze.com/episodes/4146/the-walking-dead-5x01-no-sanctuary',
                    'name': 'No Sanctuary',
                    'season': 5,
                    'number': 1,
                    'airdate': '2014-10-12',
                    'airtime': '21:00',
                    'airstamp': '2014-10-13T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/4576.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/4576.jpg'
                    },
                    'summary': '<p>The true motives of the Terminans come to light when Rick and the others end up in a vulnerable situation.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4146'
                        }
                    }
                },
                {
                    'id': 4147,
                    'url': 'http://www.tvmaze.com/episodes/4147/the-walking-dead-5x02-strangers',
                    'name': 'Strangers',
                    'season': 5,
                    'number': 2,
                    'airdate': '2014-10-19',
                    'airtime': '21:00',
                    'airstamp': '2014-10-20T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/1/4761.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/1/4761.jpg'
                    },
                    'summary': '<p>With supplies running low and not knowing whether to trust the people around them, Rick leads a mission where the risk might not be worth the reward.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4147'
                        }
                    }
                },
                {
                    'id': 4148,
                    'url': 'http://www.tvmaze.com/episodes/4148/the-walking-dead-5x03-four-walls-and-a-roof',
                    'name': 'Four Walls and a Roof',
                    'season': 5,
                    'number': 3,
                    'airdate': '2014-10-26',
                    'airtime': '21:00',
                    'airstamp': '2014-10-27T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/2/5456.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/2/5456.jpg'
                    },
                    'summary': '<p>Rick and the group find themselves pitted against some very nasty people, but they might just have a plan to gain the upper hand.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/4148'
                        }
                    }
                },
                {
                    'id': 14103,
                    'url': 'http://www.tvmaze.com/episodes/14103/the-walking-dead-5x04-slabtown',
                    'name': 'Slabtown',
                    'season': 5,
                    'number': 4,
                    'airdate': '2014-11-02',
                    'airtime': '21:00',
                    'airstamp': '2014-11-03T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/2/6600.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/2/6600.jpg'
                    },
                    'summary': '<p>In this episode, we get to meet a whole group of other survivors, but what looks safe and nice on the outside has a bit of a dark side.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/14103'
                        }
                    }
                },
                {
                    'id': 15852,
                    'url': 'http://www.tvmaze.com/episodes/15852/the-walking-dead-5x05-self-help',
                    'name': 'Self Help',
                    'season': 5,
                    'number': 5,
                    'airdate': '2014-11-09',
                    'airtime': '21:00',
                    'airstamp': '2014-11-10T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/3/9711.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/3/9711.jpg'
                    },
                    'summary': '<p>A new set of issues confront our group while on a mission. Will they be able to push through and survive these challenges? Or better yet, each other?</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/15852'
                        }
                    }
                },
                {
                    'id': 15853,
                    'url': 'http://www.tvmaze.com/episodes/15853/the-walking-dead-5x06-consumed',
                    'name': 'Consumed',
                    'season': 5,
                    'number': 6,
                    'airdate': '2014-11-16',
                    'airtime': '21:00',
                    'airstamp': '2014-11-17T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/4/11017.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/4/11017.jpg'
                    },
                    'summary': '<p>Cautiously, members of our group must venture into a familiar location on a heroic rescue mission. It\'s a huge stage, but so are the stakes.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/15853'
                        }
                    }
                },
                {
                    'id': 15854,
                    'url': 'http://www.tvmaze.com/episodes/15854/the-walking-dead-5x07-crossed',
                    'name': 'Crossed',
                    'season': 5,
                    'number': 7,
                    'airdate': '2014-11-23',
                    'airtime': '21:00',
                    'airstamp': '2014-11-24T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/4/12437.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/4/12437.jpg'
                    },
                    'summary': '<p>Between holding down the church and going on a rescue mission, our group is spread pretty thin. Is this going to be the breaking point?</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/15854'
                        }
                    }
                },
                {
                    'id': 15855,
                    'url': 'http://www.tvmaze.com/episodes/15855/the-walking-dead-5x08-coda',
                    'name': 'Coda',
                    'season': 5,
                    'number': 8,
                    'airdate': '2014-11-30',
                    'airtime': '21:00',
                    'airstamp': '2014-12-01T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/5/13527.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/5/13527.jpg'
                    },
                    'summary': '<p>Rick seeks a peaceful agreement when rules and morals are tossed aside by new enemies.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/15855'
                        }
                    }
                },
                {
                    'id': 15856,
                    'url': 'http://www.tvmaze.com/episodes/15856/the-walking-dead-5x09-what-happened-and-whats-going-on',
                    'name': 'What Happened and What\'s Going On',
                    'season': 5,
                    'number': 9,
                    'airdate': '2015-02-08',
                    'airtime': '21:00',
                    'airstamp': '2015-02-09T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/8/21352.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/8/21352.jpg'
                    },
                    'summary': '<p>After the recent trials the group has faced, a slight detour could be the solution they\'ve been searching for.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/15856'
                        }
                    }
                },
                {
                    'id': 15857,
                    'url': 'http://www.tvmaze.com/episodes/15857/the-walking-dead-5x10-them',
                    'name': 'Them',
                    'season': 5,
                    'number': 10,
                    'airdate': '2015-02-15',
                    'airtime': '21:00',
                    'airstamp': '2015-02-16T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/8/21711.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/8/21711.jpg'
                    },
                    'summary': '<p>Life on the road has left the group beaten and beleaguered. Will they be able to trudge along? Are they even the same people they once were?</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/15857'
                        }
                    }
                },
                {
                    'id': 15858,
                    'url': 'http://www.tvmaze.com/episodes/15858/the-walking-dead-5x11-the-distance',
                    'name': 'The Distance',
                    'season': 5,
                    'number': 11,
                    'airdate': '2015-02-22',
                    'airtime': '21:00',
                    'airstamp': '2015-02-23T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/8/22179.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/8/22179.jpg'
                    },
                    'summary': '<p>After a spectacular storm, Rick and the group meet a seemingly friendly person.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/15858'
                        }
                    }
                },
                {
                    'id': 15859,
                    'url': 'http://www.tvmaze.com/episodes/15859/the-walking-dead-5x12-remember',
                    'name': 'Remember',
                    'season': 5,
                    'number': 12,
                    'airdate': '2015-03-01',
                    'airtime': '21:00',
                    'airstamp': '2015-03-02T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/9/22728.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/9/22728.jpg'
                    },
                    'summary': '<p>Molding into a new lifestyle is proving difficult for the group. Has life on the road proven too treacherous to go back to who they once were?</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/15859'
                        }
                    }
                },
                {
                    'id': 15860,
                    'url': 'http://www.tvmaze.com/episodes/15860/the-walking-dead-5x13-forget',
                    'name': 'Forget',
                    'season': 5,
                    'number': 13,
                    'airdate': '2015-03-08',
                    'airtime': '21:00',
                    'airstamp': '2015-03-09T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/9/22756.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/9/22756.jpg'
                    },
                    'summary': '<p>Rick and the group continue to acclimate to their new surroundings. Will they be able to go back to normalcy? Better yet, what is normal now?</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/15860'
                        }
                    }
                },
                {
                    'id': 15861,
                    'url': 'http://www.tvmaze.com/episodes/15861/the-walking-dead-5x14-spend',
                    'name': 'Spend',
                    'season': 5,
                    'number': 14,
                    'airdate': '2015-03-15',
                    'airtime': '21:00',
                    'airstamp': '2015-03-16T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/9/23227.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/9/23227.jpg'
                    },
                    'summary': '<p>While trying to secure their new home, Rick and his group face many challenges, some life threatening. Is this really the utopia it seems to be?</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/15861'
                        }
                    }
                },
                {
                    'id': 15862,
                    'url': 'http://www.tvmaze.com/episodes/15862/the-walking-dead-5x15-try',
                    'name': 'Try',
                    'season': 5,
                    'number': 15,
                    'airdate': '2015-03-22',
                    'airtime': '21:00',
                    'airstamp': '2015-03-23T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/9/23993.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/9/23993.jpg'
                    },
                    'summary': '<p>The group realizes that sheltered life might not be possible as life within the walls starts to mimic life outside. Will these setbacks break Rick?</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/15862'
                        }
                    }
                },
                {
                    'id': 15863,
                    'url': 'http://www.tvmaze.com/episodes/15863/the-walking-dead-5x16-conquer',
                    'name': 'Conquer',
                    'season': 5,
                    'number': 16,
                    'airdate': '2015-03-29',
                    'airtime': '21:00',
                    'airstamp': '2015-03-30T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/9/24246.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/9/24246.jpg'
                    },
                    'summary': '<p>Daryl experiences trouble on a run while Rick and his group continue to feel like outsiders in Alexandria, where trouble is creeping into the gates.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/15863'
                        }
                    }
                },
                {
                    'id': 185066,
                    'url': 'http://www.tvmaze.com/episodes/185066/the-walking-dead-6x01-first-time-again',
                    'name': 'First Time Again',
                    'season': 6,
                    'number': 1,
                    'airdate': '2015-10-11',
                    'airtime': '21:00',
                    'airstamp': '2015-10-12T01:00:00+00:00',
                    'runtime': 90,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/25/64934.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/25/64934.jpg'
                    },
                    'summary': '<p>Rick and the others have a difficult time assimilating into Alexandria; a new threat arises that could bring the group closer together.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/185066'
                        }
                    }
                },
                {
                    'id': 185067,
                    'url': 'http://www.tvmaze.com/episodes/185067/the-walking-dead-6x02-jss',
                    'name': 'JSS',
                    'season': 6,
                    'number': 2,
                    'airdate': '2015-10-18',
                    'airtime': '21:00',
                    'airstamp': '2015-10-19T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/25/64935.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/25/64935.jpg'
                    },
                    'summary': '<p>When it appears that things are starting to normalize in the settlement, a new problem arises for the Alexandrians.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/185067'
                        }
                    }
                },
                {
                    'id': 185068,
                    'url': 'http://www.tvmaze.com/episodes/185068/the-walking-dead-6x03-thank-you',
                    'name': 'Thank You',
                    'season': 6,
                    'number': 3,
                    'airdate': '2015-10-25',
                    'airtime': '21:00',
                    'airstamp': '2015-10-26T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/26/65943.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/26/65943.jpg'
                    },
                    'summary': '<p>Rick and his group get caught up in a dangerous little town on the road back to Alexandria. Meanwhile, Daryl, Sasha and Abraham continue to lead away the remaining walkers away from the safe-zone.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/185068'
                        }
                    }
                },
                {
                    'id': 185069,
                    'url': 'http://www.tvmaze.com/episodes/185069/the-walking-dead-6x04-heres-not-here',
                    'name': 'Here\'s Not Here',
                    'season': 6,
                    'number': 4,
                    'airdate': '2015-11-01',
                    'airtime': '21:00',
                    'airstamp': '2015-11-02T02:00:00+00:00',
                    'runtime': 90,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/28/70292.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/28/70292.jpg'
                    },
                    'summary': '<p>A new face appears; trust issues form.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/185069'
                        }
                    }
                },
                {
                    'id': 185070,
                    'url': 'http://www.tvmaze.com/episodes/185070/the-walking-dead-6x05-now',
                    'name': 'Now',
                    'season': 6,
                    'number': 5,
                    'airdate': '2015-11-08',
                    'airtime': '21:00',
                    'airstamp': '2015-11-09T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/30/75163.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/30/75163.jpg'
                    },
                    'summary': '<p>Following a number of setbacks, the mood in Alexandria grows grim for the sheltered citizens.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/185070'
                        }
                    }
                },
                {
                    'id': 185071,
                    'url': 'http://www.tvmaze.com/episodes/185071/the-walking-dead-6x06-always-accountable',
                    'name': 'Always Accountable',
                    'season': 6,
                    'number': 6,
                    'airdate': '2015-11-15',
                    'airtime': '21:00',
                    'airstamp': '2015-11-16T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/31/78072.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/31/78072.jpg'
                    },
                    'summary': '<p>Daryl, Abraham and Sasha encounter many obstacles and a new threat while trying to return to Alexandria.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/185071'
                        }
                    }
                },
                {
                    'id': 185072,
                    'url': 'http://www.tvmaze.com/episodes/185072/the-walking-dead-6x07-heads-up',
                    'name': 'Heads Up',
                    'season': 6,
                    'number': 7,
                    'airdate': '2015-11-22',
                    'airtime': '21:00',
                    'airstamp': '2015-11-23T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/32/81183.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/32/81183.jpg'
                    },
                    'summary': '<p>Alexandria is finally able to begin pulling itself back together; peace is embraced between the two groups.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/185072'
                        }
                    }
                },
                {
                    'id': 185073,
                    'url': 'http://www.tvmaze.com/episodes/185073/the-walking-dead-6x08-start-to-finish',
                    'name': 'Start to Finish',
                    'season': 6,
                    'number': 8,
                    'airdate': '2015-11-29',
                    'airtime': '21:00',
                    'airstamp': '2015-11-30T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/32/82293.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/32/82293.jpg'
                    },
                    'summary': '<p>After having a few moments of peace, trouble finds its way to Alexandria yet again. Only this time, the threat might be too big to defeat.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/185073'
                        }
                    }
                },
                {
                    'id': 384350,
                    'url': 'http://www.tvmaze.com/episodes/384350/the-walking-dead-6x09-no-way-out',
                    'name': 'No Way Out',
                    'season': 6,
                    'number': 9,
                    'airdate': '2016-02-14',
                    'airtime': '21:00',
                    'airstamp': '2016-02-15T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/45/112611.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/45/112611.jpg'
                    },
                    'summary': '<p>With walkers inside the gates of Alexandria, Rick and the group are scared, outnumbered and things are only getting worse.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/384350'
                        }
                    }
                },
                {
                    'id': 483068,
                    'url': 'http://www.tvmaze.com/episodes/483068/the-walking-dead-6x10-the-next-world',
                    'name': 'The Next World',
                    'season': 6,
                    'number': 10,
                    'airdate': '2016-02-21',
                    'airtime': '21:00',
                    'airstamp': '2016-02-22T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/46/115053.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/46/115053.jpg'
                    },
                    'summary': '<p>A simple scavenging run proves to be more tricky, when the survivors are not the only ones after a goldmine of supplies.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/483068'
                        }
                    }
                },
                {
                    'id': 483069,
                    'url': 'http://www.tvmaze.com/episodes/483069/the-walking-dead-6x11-knots-untie',
                    'name': 'Knots Untie',
                    'season': 6,
                    'number': 11,
                    'airdate': '2016-02-28',
                    'airtime': '21:00',
                    'airstamp': '2016-02-29T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/47/117541.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/47/117541.jpg'
                    },
                    'summary': '<p>After Rick comes to the realization that Alexandria might not be as safe as he thought, decisions must be made about where to go from here.</p><p><i><br></i></p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/483069'
                        }
                    }
                },
                {
                    'id': 628794,
                    'url': 'http://www.tvmaze.com/episodes/628794/the-walking-dead-6x12-not-tomorrow-yet',
                    'name': 'Not Tomorrow Yet',
                    'season': 6,
                    'number': 12,
                    'airdate': '2016-03-06',
                    'airtime': '21:00',
                    'airstamp': '2016-03-07T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/48/120370.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/48/120370.jpg'
                    },
                    'summary': '<p>Rick and the group realize the only way to maintain the peace of Alexandria is to fight a new enemy. This time, though, our group might be outmatched.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/628794'
                        }
                    }
                },
                {
                    'id': 638714,
                    'url': 'http://www.tvmaze.com/episodes/638714/the-walking-dead-6x13-the-same-boat',
                    'name': 'The Same Boat',
                    'season': 6,
                    'number': 13,
                    'airdate': '2016-03-13',
                    'airtime': '21:00',
                    'airstamp': '2016-03-14T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/49/122738.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/49/122738.jpg'
                    },
                    'summary': '<p>With no hope of safety in Alexandria, Rick and his band of survivors soon discover a larger world with new dangers and new opportunities.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/638714'
                        }
                    }
                },
                {
                    'id': 639987,
                    'url': 'http://www.tvmaze.com/episodes/639987/the-walking-dead-6x14-twice-as-far',
                    'name': 'Twice as Far',
                    'season': 6,
                    'number': 14,
                    'airdate': '2016-03-20',
                    'airtime': '21:00',
                    'airstamp': '2016-03-21T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/49/124618.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/49/124618.jpg'
                    },
                    'summary': '<p>Two separate groups leave Alexandria for supplies, and while both worry over the future of the community, they will face immediate danger.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/639987'
                        }
                    }
                },
                {
                    'id': 639988,
                    'url': 'http://www.tvmaze.com/episodes/639988/the-walking-dead-6x15-east',
                    'name': 'East',
                    'season': 6,
                    'number': 15,
                    'airdate': '2016-03-27',
                    'airtime': '21:00',
                    'airstamp': '2016-03-28T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/51/127564.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/51/127564.jpg'
                    },
                    'summary': '<p>When someone goes missing in Alexandria, the community goes on alert, and search parties venture out.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/639988'
                        }
                    }
                },
                {
                    'id': 639999,
                    'url': 'http://www.tvmaze.com/episodes/639999/the-walking-dead-6x16-last-day-on-earth',
                    'name': 'Last Day on Earth',
                    'season': 6,
                    'number': 16,
                    'airdate': '2016-04-03',
                    'airtime': '21:00',
                    'airstamp': '2016-04-04T01:00:00+00:00',
                    'runtime': 90,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/51/129668.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/51/129668.jpg'
                    },
                    'summary': '<p>In the aftermath of a tragic blow, Eugene falls captured by Dwight, a member of the Saviors, whom are hell bent on getting even with Alexandria, Negan teaches Rick and co a brutal lesson, which shows that Rick and co finally have something to fear.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/639999'
                        }
                    }
                },
                {
                    'id': 707345,
                    'url': 'http://www.tvmaze.com/episodes/707345/the-walking-dead-7x01-the-day-will-come-when-you-wont-be',
                    'name': 'The Day Will Come When You Won\'t Be',
                    'season': 7,
                    'number': 1,
                    'airdate': '2016-10-23',
                    'airtime': '21:00',
                    'airstamp': '2016-10-24T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/81/204734.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/81/204734.jpg'
                    },
                    'summary': '<p>Last season ended with Rick and our group kneeling helplessly before Negan and his group; what Negan does will haunt those who survive forever.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/707345'
                        }
                    }
                },
                {
                    'id': 895793,
                    'url': 'http://www.tvmaze.com/episodes/895793/the-walking-dead-7x02-the-well',
                    'name': 'The Well',
                    'season': 7,
                    'number': 2,
                    'airdate': '2016-10-30',
                    'airtime': '21:00',
                    'airstamp': '2016-10-31T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/84/210152.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/84/210152.jpg'
                    },
                    'summary': '<p>For a number of familiar faces, a new, well-established community seems too good to be true.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/895793'
                        }
                    }
                },
                {
                    'id': 895794,
                    'url': 'http://www.tvmaze.com/episodes/895794/the-walking-dead-7x03-the-cell',
                    'name': 'The Cell',
                    'season': 7,
                    'number': 3,
                    'airdate': '2016-11-06',
                    'airtime': '21:00',
                    'airstamp': '2016-11-07T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/84/210151.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/84/210151.jpg'
                    },
                    'summary': '<p>A new group of survivors seem to have it all in their impressive community; however, there is a price.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/895794'
                        }
                    }
                },
                {
                    'id': 895795,
                    'url': 'http://www.tvmaze.com/episodes/895795/the-walking-dead-7x04-service',
                    'name': 'Service',
                    'season': 7,
                    'number': 4,
                    'airdate': '2016-11-13',
                    'airtime': '21:00',
                    'airstamp': '2016-11-14T02:00:00+00:00',
                    'runtime': 85,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/84/211847.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/84/211847.jpg'
                    },
                    'summary': '<p>The remaining members of the group try to keep it together in Alexandria; they receive a sobering visit.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/895795'
                        }
                    }
                },
                {
                    'id': 895796,
                    'url': 'http://www.tvmaze.com/episodes/895796/the-walking-dead-7x05-go-getters',
                    'name': 'Go Getters',
                    'season': 7,
                    'number': 5,
                    'airdate': '2016-11-20',
                    'airtime': '21:00',
                    'airstamp': '2016-11-21T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/84/211848.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/84/211848.jpg'
                    },
                    'summary': '<p>Saddled with grief and surrounded by enemies, members of the group try to find safety at the Hilltop before it\'s too late.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/895796'
                        }
                    }
                },
                {
                    'id': 895797,
                    'url': 'http://www.tvmaze.com/episodes/895797/the-walking-dead-7x06-swear',
                    'name': 'Swear',
                    'season': 7,
                    'number': 6,
                    'airdate': '2016-11-27',
                    'airtime': '21:00',
                    'airstamp': '2016-11-28T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/86/217448.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/86/217448.jpg'
                    },
                    'summary': '<p>Someone stumbles upon a brand new society, and this society is unlike anything seen before.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/895797'
                        }
                    }
                },
                {
                    'id': 895798,
                    'url': 'http://www.tvmaze.com/episodes/895798/the-walking-dead-7x07-sing-me-a-song',
                    'name': 'Sing Me a Song',
                    'season': 7,
                    'number': 7,
                    'airdate': '2016-12-04',
                    'airtime': '21:00',
                    'airstamp': '2016-12-05T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/87/219924.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/87/219924.jpg'
                    },
                    'summary': '<p>A deeper look at the Sanctuary and the world of the Saviors; members of Alexandria look for supplies.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/895798'
                        }
                    }
                },
                {
                    'id': 895799,
                    'url': 'http://www.tvmaze.com/episodes/895799/the-walking-dead-7x08-hearts-still-beating',
                    'name': 'Hearts Still Beating',
                    'season': 7,
                    'number': 8,
                    'airdate': '2016-12-11',
                    'airtime': '21:00',
                    'airstamp': '2016-12-12T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/88/222262.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/88/222262.jpg'
                    },
                    'summary': '<p>Negan\'s unwelcome visit to Alexandria continues as other members scavenge for supplies; things quickly spin out of control.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/895799'
                        }
                    }
                },
                {
                    'id': 1013811,
                    'url': 'http://www.tvmaze.com/episodes/1013811/the-walking-dead-7x09-rock-in-the-road',
                    'name': 'Rock in the Road',
                    'season': 7,
                    'number': 9,
                    'airdate': '2017-02-12',
                    'airtime': '21:00',
                    'airstamp': '2017-02-13T02:00:00+00:00',
                    'runtime': 73,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/98/245711.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/98/245711.jpg'
                    },
                    'summary': '<p>Rick is introduced to a new community.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1013811'
                        }
                    }
                },
                {
                    'id': 1055161,
                    'url': 'http://www.tvmaze.com/episodes/1055161/the-walking-dead-7x10-new-best-friends',
                    'name': 'New Best Friends',
                    'season': 7,
                    'number': 10,
                    'airdate': '2017-02-19',
                    'airtime': '21:00',
                    'airstamp': '2017-02-20T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/99/249101.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/99/249101.jpg'
                    },
                    'summary': '<p>While searching for a missing Alexandrian, Rick and his group encounter a mysterious collective, its inhabitants unlike any they have come across.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1055161'
                        }
                    }
                },
                {
                    'id': 1063327,
                    'url': 'http://www.tvmaze.com/episodes/1063327/the-walking-dead-7x11-hostiles-and-calamities',
                    'name': 'Hostiles and Calamities',
                    'season': 7,
                    'number': 11,
                    'airdate': '2017-02-26',
                    'airtime': '21:00',
                    'airstamp': '2017-02-27T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/100/250430.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/100/250430.jpg'
                    },
                    'summary': '<p>An Alexandrian discovers they must navigate the mysterious, confusing and terrifying world within the Saviors\' compound.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1063327'
                        }
                    }
                },
                {
                    'id': 1063328,
                    'url': 'http://www.tvmaze.com/episodes/1063328/the-walking-dead-7x12-say-yes',
                    'name': 'Say Yes',
                    'season': 7,
                    'number': 12,
                    'airdate': '2017-03-05',
                    'airtime': '21:00',
                    'airstamp': '2017-03-06T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/101/253221.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/101/253221.jpg'
                    },
                    'summary': '<p>The group scavenges for supplies; back in Alexandria, someone must make a morally challenging decision.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1063328'
                        }
                    }
                },
                {
                    'id': 1063329,
                    'url': 'http://www.tvmaze.com/episodes/1063329/the-walking-dead-7x13-bury-me-here',
                    'name': 'Bury Me Here',
                    'season': 7,
                    'number': 13,
                    'airdate': '2017-03-12',
                    'airtime': '21:00',
                    'airstamp': '2017-03-13T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/102/255064.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/102/255064.jpg'
                    },
                    'summary': '<p>Things do not go as planned when a group of Kingdommers delivers goods to the Saviors during a routine supply drop-off.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1063329'
                        }
                    }
                },
                {
                    'id': 1063330,
                    'url': 'http://www.tvmaze.com/episodes/1063330/the-walking-dead-7x14-the-other-side',
                    'name': 'The Other Side',
                    'season': 7,
                    'number': 14,
                    'airdate': '2017-03-19',
                    'airtime': '21:00',
                    'airstamp': '2017-03-20T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/102/257406.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/102/257406.jpg'
                    },
                    'summary': '<p>The Saviors visit the Hilltop unexpectedly, surprising everyone, with plans of taking more than supplies.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1063330'
                        }
                    }
                },
                {
                    'id': 1063331,
                    'url': 'http://www.tvmaze.com/episodes/1063331/the-walking-dead-7x15-something-they-need',
                    'name': 'Something They Need',
                    'season': 7,
                    'number': 15,
                    'airdate': '2017-03-26',
                    'airtime': '21:00',
                    'airstamp': '2017-03-27T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/103/258072.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/103/258072.jpg'
                    },
                    'summary': '<p>A group of Alexandrians embarks on a journey; one member of the group must make a heartbreaking decision.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1063331'
                        }
                    }
                },
                {
                    'id': 1063332,
                    'url': 'http://www.tvmaze.com/episodes/1063332/the-walking-dead-7x16-the-first-day-of-the-rest-of-your-life',
                    'name': 'The First Day of the Rest of Your Life',
                    'season': 7,
                    'number': 16,
                    'airdate': '2017-04-02',
                    'airtime': '21:00',
                    'airstamp': '2017-04-03T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/104/260887.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/104/260887.jpg'
                    },
                    'summary': '<p>The stakes continue to grow higher as paths cross; the group enacts an intricate plan.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1063332'
                        }
                    }
                },
                {
                    'id': 1254265,
                    'url': 'http://www.tvmaze.com/episodes/1254265/the-walking-dead-8x01-mercy',
                    'name': 'Mercy',
                    'season': 8,
                    'number': 1,
                    'airdate': '2017-10-22',
                    'airtime': '21:00',
                    'airstamp': '2017-10-23T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/132/330943.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/132/330943.jpg'
                    },
                    'summary': '<p>Rick and his group, along with the Kingdom and Hilltop, have banded together to bring the fight to Negan and the Saviors.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1254265'
                        }
                    }
                },
                {
                    'id': 1319895,
                    'url': 'http://www.tvmaze.com/episodes/1319895/the-walking-dead-8x02-the-damned',
                    'name': 'The Damned',
                    'season': 8,
                    'number': 2,
                    'airdate': '2017-10-29',
                    'airtime': '21:00',
                    'airstamp': '2017-10-30T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/133/332920.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/133/332920.jpg'
                    },
                    'summary': '<p>The plan involving Alexandrians, Kingdommers and Hilltoppers unfolds; as Rick continues to fight, he encounters a familiar face.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1319895'
                        }
                    }
                },
                {
                    'id': 1320243,
                    'url': 'http://www.tvmaze.com/episodes/1320243/the-walking-dead-8x03-monsters',
                    'name': 'Monsters',
                    'season': 8,
                    'number': 3,
                    'airdate': '2017-11-05',
                    'airtime': '21:00',
                    'airstamp': '2017-11-06T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/134/335146.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/134/335146.jpg'
                    },
                    'summary': '<p>Conflict with the Saviors leads to unintended consequences for the Hilltop, the Kingdom, and Alexandria; morality proves tricky in wartime.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1320243'
                        }
                    }
                },
                {
                    'id': 1335911,
                    'url': 'http://www.tvmaze.com/episodes/1335911/the-walking-dead-8x04-some-guy',
                    'name': 'Some Guy',
                    'season': 8,
                    'number': 4,
                    'airdate': '2017-11-12',
                    'airtime': '21:00',
                    'airstamp': '2017-11-13T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/134/337406.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/134/337406.jpg'
                    },
                    'summary': '<p>A new weapon in the Savior arsenal proves to be a giant hurdle as fighting continues between Rick\'s forces and those of the Saviors.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1335911'
                        }
                    }
                },
                {
                    'id': 1335912,
                    'url': 'http://www.tvmaze.com/episodes/1335912/the-walking-dead-8x05-the-big-scary-u',
                    'name': 'The Big Scary U',
                    'season': 8,
                    'number': 5,
                    'airdate': '2017-11-19',
                    'airtime': '21:00',
                    'airstamp': '2017-11-20T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/135/339450.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/135/339450.jpg'
                    },
                    'summary': '<p>A close look at Negan and the lives of the Saviors during the conflict through a familiar set of eyes.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1335912'
                        }
                    }
                },
                {
                    'id': 1336334,
                    'url': 'http://www.tvmaze.com/episodes/1336334/the-walking-dead-8x06-the-king-the-widow-and-rick',
                    'name': 'The King, the Widow, and Rick',
                    'season': 8,
                    'number': 6,
                    'airdate': '2017-11-26',
                    'airtime': '21:00',
                    'airstamp': '2017-11-27T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/136/341547.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/136/341547.jpg'
                    },
                    'summary': '<p>With things looking up for Rick and the group, an argument breaks out at the Hilltop; the consequences of the decision are life versus death.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1336334'
                        }
                    }
                },
                {
                    'id': 1336335,
                    'url': 'http://www.tvmaze.com/episodes/1336335/the-walking-dead-8x07-time-for-after',
                    'name': 'Time for After',
                    'season': 8,
                    'number': 7,
                    'airdate': '2017-12-03',
                    'airtime': '21:00',
                    'airstamp': '2017-12-04T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/137/343481.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/137/343481.jpg'
                    },
                    'summary': '<p>Negan has to enlist the help of his lieutenants in solving a huge issue facing the Sanctuary; Rick and the group continue to enact the plan.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1336335'
                        }
                    }
                },
                {
                    'id': 1336336,
                    'url': 'http://www.tvmaze.com/episodes/1336336/the-walking-dead-8x08-how-its-gotta-be',
                    'name': 'How It\'s Gotta Be',
                    'season': 8,
                    'number': 8,
                    'airdate': '2017-12-10',
                    'airtime': '21:00',
                    'airstamp': '2017-12-11T02:00:00+00:00',
                    'runtime': 88,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/138/345620.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/138/345620.jpg'
                    },
                    'summary': '<p>Every story and battle from the first half of the season comes crashing together in this action-packed, emotional mid-season finale.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1336336'
                        }
                    }
                },
                {
                    'id': 1371551,
                    'url': 'http://www.tvmaze.com/episodes/1371551/the-walking-dead-8x09-honor',
                    'name': 'Honor',
                    'season': 8,
                    'number': 9,
                    'airdate': '2018-02-25',
                    'airtime': '21:00',
                    'airstamp': '2018-02-26T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/147/367863.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/147/367863.jpg'
                    },
                    'summary': '<p>Rick faces new difficulties after a battle. Meanwhile, the fight continues in other communities as core members face hard decisions.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1371551'
                        }
                    }
                },
                {
                    'id': 1406101,
                    'url': 'http://www.tvmaze.com/episodes/1406101/the-walking-dead-8x10-the-lost-and-the-plunderers',
                    'name': 'The Lost and the Plunderers',
                    'season': 8,
                    'number': 10,
                    'airdate': '2018-03-04',
                    'airtime': '21:00',
                    'airstamp': '2018-03-05T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/147/369793.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/147/369793.jpg'
                    },
                    'summary': '<p>Groups unite their forces and converge on the Hilltop; Aaron and Enid search for allies.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1406101'
                        }
                    }
                },
                {
                    'id': 1409522,
                    'url': 'http://www.tvmaze.com/episodes/1409522/the-walking-dead-8x11-dead-or-alive-or',
                    'name': 'Dead or Alive Or',
                    'season': 8,
                    'number': 11,
                    'airdate': '2018-03-11',
                    'airtime': '21:00',
                    'airstamp': '2018-03-12T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/148/371989.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/148/371989.jpg'
                    },
                    'summary': '<p>Daryl finds himself in bad company as his group heads to the Hilltop; Gabriel\'s faith gets tested.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1409522'
                        }
                    }
                },
                {
                    'id': 1409523,
                    'url': 'http://www.tvmaze.com/episodes/1409523/the-walking-dead-8x12-the-key',
                    'name': 'The Key',
                    'season': 8,
                    'number': 12,
                    'airdate': '2018-03-18',
                    'airtime': '21:00',
                    'airstamp': '2018-03-19T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/148/371804.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/148/371804.jpg'
                    },
                    'summary': '<p>Hilltop\'s leadership faces a difficult dilemma after the arrival of unexpected visitors; Rick comes face to face with an adversary.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1409523'
                        }
                    }
                },
                {
                    'id': 1409524,
                    'url': 'http://www.tvmaze.com/episodes/1409524/the-walking-dead-8x13-do-not-send-us-astray',
                    'name': 'Do Not Send Us Astray',
                    'season': 8,
                    'number': 13,
                    'airdate': '2018-03-25',
                    'airtime': '21:00',
                    'airstamp': '2018-03-26T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/150/376680.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/150/376680.jpg'
                    },
                    'summary': '<p>Trouble arises when unexpected visitors arrive at the Hilltop and the community is thrust into action; heartbreaking discoveries are made.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1409524'
                        }
                    }
                },
                {
                    'id': 1409525,
                    'url': 'http://www.tvmaze.com/episodes/1409525/the-walking-dead-8x14-still-gotta-mean-something',
                    'name': 'Still Gotta Mean Something',
                    'season': 8,
                    'number': 14,
                    'airdate': '2018-04-01',
                    'airtime': '21:00',
                    'airstamp': '2018-04-02T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/151/378728.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/151/378728.jpg'
                    },
                    'summary': '<p>A Heaps prisoner makes a discovery; Carol searches for someone in the nearby forest; Rick and Morgan find themselves in the company of strangers.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1409525'
                        }
                    }
                },
                {
                    'id': 1409526,
                    'url': 'http://www.tvmaze.com/episodes/1409526/the-walking-dead-8x15-worth',
                    'name': 'Worth',
                    'season': 8,
                    'number': 15,
                    'airdate': '2018-04-08',
                    'airtime': '21:00',
                    'airstamp': '2018-04-09T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/152/380620.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/152/380620.jpg'
                    },
                    'summary': '<p>With the threat of the Saviors still looming, Aaron continues searching for allies; Daryl and Rosita take action and confront an old friend.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1409526'
                        }
                    }
                },
                {
                    'id': 1409696,
                    'url': 'http://www.tvmaze.com/episodes/1409696/the-walking-dead-8x16-wrath',
                    'name': 'Wrath',
                    'season': 8,
                    'number': 16,
                    'airdate': '2018-04-15',
                    'airtime': '21:00',
                    'airstamp': '2018-04-16T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/152/381818.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/152/381818.jpg'
                    },
                    'summary': '<p>The communities join forces in the last stand against the Saviors as all-out war unfolds.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1409696'
                        }
                    }
                },
                {
                    'id': 1499273,
                    'url': 'http://www.tvmaze.com/episodes/1499273/the-walking-dead-9x01-a-new-beginning',
                    'name': 'A New Beginning',
                    'season': 9,
                    'number': 1,
                    'airdate': '2018-10-07',
                    'airtime': '21:00',
                    'airstamp': '2018-10-08T01:00:00+00:00',
                    'runtime': 90,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/170/426282.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/170/426282.jpg'
                    },
                    'summary': '<p>Rick and his group make a risky run into Washington, D.C. to search for artifacts they will need to build the civilization he and Carl envisioned.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1499273'
                        }
                    }
                },
                {
                    'id': 1529474,
                    'url': 'http://www.tvmaze.com/episodes/1529474/the-walking-dead-9x02-the-bridge',
                    'name': 'The Bridge',
                    'season': 9,
                    'number': 2,
                    'airdate': '2018-10-14',
                    'airtime': '21:00',
                    'airstamp': '2018-10-15T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/172/431001.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/172/431001.jpg'
                    },
                    'summary': '<p>The communities join forces to restore a bridge that will facilitate communication and trade; someone is gravely injured at the construction site.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1529474'
                        }
                    }
                },
                {
                    'id': 1529475,
                    'url': 'http://www.tvmaze.com/episodes/1529475/the-walking-dead-9x03-warning-signs',
                    'name': 'Warning Signs',
                    'season': 9,
                    'number': 3,
                    'airdate': '2018-10-21',
                    'airtime': '21:00',
                    'airstamp': '2018-10-22T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/172/431263.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/172/431263.jpg'
                    },
                    'summary': '<p>Rick\'s vision for the future is threatened by a mysterious disappearance that divides the work camp where the communities are building a bridge.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1529475'
                        }
                    }
                },
                {
                    'id': 1529476,
                    'url': 'http://www.tvmaze.com/episodes/1529476/the-walking-dead-9x04-the-obliged',
                    'name': 'The Obliged',
                    'season': 9,
                    'number': 4,
                    'airdate': '2018-10-28',
                    'airtime': '21:00',
                    'airstamp': '2018-10-29T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/173/432983.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/173/432983.jpg'
                    },
                    'summary': '<p>Rick\'s vision of a civilized future is threatened by a sudden reckoning with past sins that remain unavenged and unforgiven.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1529476'
                        }
                    }
                },
                {
                    'id': 1529477,
                    'url': 'http://www.tvmaze.com/episodes/1529477/the-walking-dead-9x05-what-comes-after',
                    'name': 'What Comes After',
                    'season': 9,
                    'number': 5,
                    'airdate': '2018-11-04',
                    'airtime': '21:00',
                    'airstamp': '2018-11-05T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/173/434561.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/173/434561.jpg'
                    },
                    'summary': '<p>Rick is forced to face the past as he struggles to maintain the safety of the communities and protect the future he and Carl envisioned.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1529477'
                        }
                    }
                },
                {
                    'id': 1529478,
                    'url': 'http://www.tvmaze.com/episodes/1529478/the-walking-dead-9x06-who-are-you-now',
                    'name': 'Who Are You Now?',
                    'season': 9,
                    'number': 6,
                    'airdate': '2018-11-11',
                    'airtime': '21:00',
                    'airstamp': '2018-11-12T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/174/436551.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/174/436551.jpg'
                    },
                    'summary': '<p>The Survivors encounter unfamiliar faces outside the safety of their community\'s walls and must decide whether or not this new group can be trusted.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1529478'
                        }
                    }
                },
                {
                    'id': 1529479,
                    'url': 'http://www.tvmaze.com/episodes/1529479/the-walking-dead-9x07-stradivarius',
                    'name': 'Stradivarius',
                    'season': 9,
                    'number': 7,
                    'airdate': '2018-11-18',
                    'airtime': '21:00',
                    'airstamp': '2018-11-19T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/175/438005.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/175/438005.jpg'
                    },
                    'summary': '<p>Carol seeks out an old friend living alone in a wilderness teeming with walkers; survivors make the perilous trek to a new home.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1529479'
                        }
                    }
                },
                {
                    'id': 1529480,
                    'url': 'http://www.tvmaze.com/episodes/1529480/the-walking-dead-9x08-evolution',
                    'name': 'Evolution',
                    'season': 9,
                    'number': 8,
                    'airdate': '2018-11-25',
                    'airtime': '21:00',
                    'airstamp': '2018-11-26T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/175/439260.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/175/439260.jpg'
                    },
                    'summary': '<p>A small rescue mission braves a dangerous herd in their hunt for a missing comrade, only to discover a surprising threat that could doom them all.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1529480'
                        }
                    }
                },
                {
                    'id': 1571127,
                    'url': 'http://www.tvmaze.com/episodes/1571127/the-walking-dead-9x09-adaptation',
                    'name': 'Adaptation',
                    'season': 9,
                    'number': 9,
                    'airdate': '2019-02-10',
                    'airtime': '21:00',
                    'airstamp': '2019-02-11T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/183/458764.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/183/458764.jpg'
                    },
                    'summary': '<p>The communities thought they could build a better future separately, but the recent loss of one of their own drives them to band together; new leaders rise when a disturbing and dangerous threat is unmasked; an escaped captive revisits his past.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1571127'
                        }
                    }
                },
                {
                    'id': 1594717,
                    'url': 'http://www.tvmaze.com/episodes/1594717/the-walking-dead-9x10-omega',
                    'name': 'Omega',
                    'season': 9,
                    'number': 10,
                    'airdate': '2019-02-17',
                    'airtime': '21:00',
                    'airstamp': '2019-02-18T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/184/460892.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/184/460892.jpg'
                    },
                    'summary': '<p>Daryl learns more about the masked tribe\'s leader; a search begins for two missing friends.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1594717'
                        }
                    }
                },
                {
                    'id': 1594718,
                    'url': 'http://www.tvmaze.com/episodes/1594718/the-walking-dead-9x11-bounty',
                    'name': 'Bounty',
                    'season': 9,
                    'number': 11,
                    'airdate': '2019-02-24',
                    'airtime': '21:00',
                    'airstamp': '2019-02-25T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/185/462807.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/185/462807.jpg'
                    },
                    'summary': '<p>The savage group led by Alpha confronts the Hilltop in a harrowing attempt to retrieve her daughter. A supply run for the Kingdom turns into a dangerous quest.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1594718'
                        }
                    }
                },
                {
                    'id': 1594719,
                    'url': 'http://www.tvmaze.com/episodes/1594719/the-walking-dead-9x12-guardians',
                    'name': 'Guardians',
                    'season': 9,
                    'number': 12,
                    'airdate': '2019-03-03',
                    'airtime': '21:00',
                    'airstamp': '2019-03-04T02:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/185/463783.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/185/463783.jpg'
                    },
                    'summary': '<p>While one community struggles to ease tensions that threaten to divide from within, the true nature of another group comes into focus; a mission to rescue a friend has deadly consequences.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1594719'
                        }
                    }
                },
                {
                    'id': 1613890,
                    'url': 'http://www.tvmaze.com/episodes/1613890/the-walking-dead-9x13-chokepoint',
                    'name': 'Chokepoint',
                    'season': 9,
                    'number': 13,
                    'airdate': '2019-03-10',
                    'airtime': '21:00',
                    'airstamp': '2019-03-11T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/186/466598.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/186/466598.jpg'
                    },
                    'summary': '<p>Daryl\'s daring rescue mission forces Alpha to unleash a group of her own to retrieve what belongs to her, even if the price is paid in blood; the Kingdom\'s plans to reunite the communities are put in jeopardy.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1613890'
                        }
                    }
                },
                {
                    'id': 1614107,
                    'url': 'http://www.tvmaze.com/episodes/1614107/the-walking-dead-9x14-scars',
                    'name': 'Scars',
                    'season': 9,
                    'number': 14,
                    'airdate': '2019-03-17',
                    'airtime': '21:00',
                    'airstamp': '2019-03-18T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/187/468557.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/187/468557.jpg'
                    },
                    'summary': '<p>An outsider\'s arrival forces Alexandria to rehash devastating old wounds; eye-opening secrets from the past are revealed.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1614107'
                        }
                    }
                },
                {
                    'id': 1614108,
                    'url': 'http://www.tvmaze.com/episodes/1614108/the-walking-dead-9x15-the-calm-before',
                    'name': 'The Calm Before',
                    'season': 9,
                    'number': 15,
                    'airdate': '2019-03-24',
                    'airtime': '21:00',
                    'airstamp': '2019-03-25T01:00:00+00:00',
                    'runtime': 85,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/189/474045.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/189/474045.jpg'
                    },
                    'summary': '<p>The fair at the Kingdom is underway, with all four communities coming together in celebration for the first time in years; while some pacts are renewed, other deals will come at a much steeper price.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1614108'
                        }
                    }
                },
                {
                    'id': 1614109,
                    'url': 'http://www.tvmaze.com/episodes/1614109/the-walking-dead-9x16-the-storm',
                    'name': 'The Storm',
                    'season': 9,
                    'number': 16,
                    'airdate': '2019-03-31',
                    'airtime': '21:00',
                    'airstamp': '2019-04-01T01:00:00+00:00',
                    'runtime': 60,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/190/475352.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/190/475352.jpg'
                    },
                    'summary': '<p>In the aftermath of an overwhelming loss, the communities must brave a ferocious blizzard; as one group deals with an enemy from within, another is forced to make a life or death decision.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1614109'
                        }
                    }
                },
                {
                    'id': 1685119,
                    'url': 'http://www.tvmaze.com/episodes/1685119/the-walking-dead-10x01-lines-we-cross',
                    'name': 'Lines We Cross',
                    'season': 10,
                    'number': 1,
                    'airdate': '2019-10-06',
                    'airtime': '21:00',
                    'airstamp': '2019-10-07T01:00:00+00:00',
                    'runtime': 74,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/214/536351.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/214/536351.jpg'
                    },
                    'summary': '<p>The Oceanside group continues to train in case the Whisperers return. Tensions are high as our heroes struggle to hold onto their concept of civilization.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1685119'
                        }
                    }
                },
                {
                    'id': 1717801,
                    'url': 'http://www.tvmaze.com/episodes/1717801/the-walking-dead-10x02-we-are-the-end-of-the-world',
                    'name': 'We Are the End of the World',
                    'season': 10,
                    'number': 2,
                    'airdate': '2019-10-13',
                    'airtime': '21:00',
                    'airstamp': '2019-10-14T01:00:00+00:00',
                    'runtime': 45,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/215/539383.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/215/539383.jpg'
                    },
                    'summary': '<p>The origins of Alpha and Beta are revealed in a flashback; Alpha tries to help Lydia prepare for their journey with the dead; the Whisperers create herds.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1717801'
                        }
                    }
                },
                {
                    'id': 1717802,
                    'url': 'http://www.tvmaze.com/episodes/1717802/the-walking-dead-10x03-ghosts',
                    'name': 'Ghosts',
                    'season': 10,
                    'number': 3,
                    'airdate': '2019-10-20',
                    'airtime': '21:00',
                    'airstamp': '2019-10-21T01:00:00+00:00',
                    'runtime': 68,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/217/542603.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/217/542603.jpg'
                    },
                    'summary': '<p>Alexandria is overcome with paranoia as the threat of the Whisperers looms; Carol struggles over her desperate urge for revenge.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1717802'
                        }
                    }
                },
                {
                    'id': 1717803,
                    'url': 'http://www.tvmaze.com/episodes/1717803/the-walking-dead-10x04-silence-the-whisperers',
                    'name': 'Silence the Whisperers',
                    'season': 10,
                    'number': 4,
                    'airdate': '2019-10-27',
                    'airtime': '21:00',
                    'airstamp': '2019-10-28T01:00:00+00:00',
                    'runtime': 64,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/217/544787.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/217/544787.jpg'
                    },
                    'summary': '<p>Negan feels the brunt of the Alexandrians\' fears as their paranoia of the Whisperers grows; a safety issue catches the group off guard at Hilltop.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1717803'
                        }
                    }
                },
                {
                    'id': 1717804,
                    'url': 'http://www.tvmaze.com/episodes/1717804/the-walking-dead-10x05-what-it-always-is',
                    'name': 'What It Always Is',
                    'season': 10,
                    'number': 5,
                    'airdate': '2019-11-03',
                    'airtime': '21:00',
                    'airstamp': '2019-11-04T02:00:00+00:00',
                    'runtime': 68,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/218/547220.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/218/547220.jpg'
                    },
                    'summary': '<p>Supplies go missing from Hilltop; Negan is idolized by an Alexandrian; Ezekiel holds a secret.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1717804'
                        }
                    }
                },
                {
                    'id': 1717805,
                    'url': 'http://www.tvmaze.com/episodes/1717805/the-walking-dead-10x06-bonds',
                    'name': 'Bonds',
                    'season': 10,
                    'number': 6,
                    'airdate': '2019-11-10',
                    'airtime': '21:00',
                    'airstamp': '2019-11-11T02:00:00+00:00',
                    'runtime': 67,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/223/558958.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/223/558958.jpg'
                    },
                    'summary': '<p>Carol teams up with Daryl as they embark on a mission together; Siddiq finds it harder than expected to unravel a mystery.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1717805'
                        }
                    }
                },
                {
                    'id': 1717806,
                    'url': 'http://www.tvmaze.com/episodes/1717806/the-walking-dead-10x07-open-your-eyes',
                    'name': 'Open Your Eyes',
                    'season': 10,
                    'number': 7,
                    'airdate': '2019-11-17',
                    'airtime': '21:00',
                    'airstamp': '2019-11-18T02:00:00+00:00',
                    'runtime': 65,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/225/562704.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/225/562704.jpg'
                    },
                    'summary': '<p>Daryl becomes uncomfortable when Carol starts going past his boundaries; Alpha and Beta share reservations about a certain individual.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1717806'
                        }
                    }
                },
                {
                    'id': 1717807,
                    'url': 'http://www.tvmaze.com/episodes/1717807/the-walking-dead-10x08-the-world-before',
                    'name': 'The World Before',
                    'season': 10,
                    'number': 8,
                    'airdate': '2019-11-24',
                    'airtime': '21:00',
                    'airstamp': '2019-11-25T02:00:00+00:00',
                    'runtime': 80,
                    'image': {
                        'medium': 'http://static.tvmaze.com/uploads/images/medium_landscape/227/569662.jpg',
                        'original': 'http://static.tvmaze.com/uploads/images/original_untouched/227/569662.jpg'
                    },
                    'summary': '<p>A fight causes tensions in Oceanside while the Alexandrians set out on a high-stakes mission.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1717807'
                        }
                    }
                },
                {
                    'id': 1762852,
                    'url': 'http://www.tvmaze.com/episodes/1762852/the-walking-dead-10x09-squeeze',
                    'name': 'Squeeze',
                    'season': 10,
                    'number': 9,
                    'airdate': '2020-02-23',
                    'airtime': '21:00',
                    'airstamp': '2020-02-24T02:00:00+00:00',
                    'runtime': 60,
                    'image': null,
                    'summary': '<p>The collected communities are reluctantly respecting the new borderlines being imposed on them.</p>',
                    '_links': {
                        'self': {
                            'href': 'http://api.tvmaze.com/episodes/1762852'
                        }
                    }
                }
            ]
        }
    };
    let walkingDeadData1 = walkingDeadData.genres.find((item) => item === 'Drama');
    console.log(walkingDeadData1);

    let wal2 = walkingDeadData._embedded.episodes.length;
    console.log(wal2);

    let wal = walkingDeadData._embedded.episodes.filter((item) => item.season === 1).length;
    console.log(wal);

    let wal1 = walkingDeadData._embedded.episodes.map((item) => {
        return item.summary.replace(/<p>/g, "").replace(/<\/p>/g, "");
    });
    console.log(wal1);

    let wal22 = walkingDeadData._embedded.episodes.reduce((result, item) => {
        result += item.runtime;
        return result;
    }, 0);

    let t = Math.round(wal22 / 60);
    let d = t / 24;

    console.log("min: " + wal22);
    console.log("hours: " + t);
    console.log("days: " + d);
}
