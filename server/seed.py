from app import app
from models import db, Team, Player, Game, Performance
from datetime import datetime

def seed_data():
    with app.app_context():

        try:
            # Delete existing rows to avoid duplicate entries
            print("Deleting data...")
            Game.query.delete()
            Player.query.delete()
            Team.query.delete()

            # Commit after deletions to ensure the changes are saved
            db.session.commit()

            print("Creating teams...")
            teams_data = [
                {"name": "Arizona Cardinals", "city": "Phoenix", "rank": 14, "logo": "arizona_cardinals_logo.png"},
                {"name": "Atlanta Falcons", "city": "Atlanta", "rank": 26, "logo": "atlanta_falcons_logo.png"},
                {"name": "Baltimore Ravens", "city": "Baltimore", "rank": 7, "logo": "baltimore_ravens_logo.png"},
                {"name": "Buffalo Bills", "city": "Buffalo", "rank": 3, "logo": "buffalo_bills_logo.png"},
                {"name": "Carolina Panthers", "city": "Charlotte", "rank": 24, "logo": "carolina_panthers_logo.png"},
                {"name": "Chicago Bears", "city": "Chicago", "rank": 21, "logo": "chicago_bears_logo.png"},
                {"name": "Cincinnati Bengals", "city": "Cincinnati", "rank": 29, "logo": "cincinnati_bengals_logo.png"},
                {"name": "Cleveland Browns", "city": "Cleveland", "rank": 6, "logo": "cleveland_browns_logo.png"},
                {"name": "Dallas Cowboys", "city": "Dallas", "rank": 9, "logo": "dallas_cowboys_logo.png"},
                {"name": "Denver Broncos", "city": "Denver", "rank": 20, "logo": "denver_broncos_logo.png"},
                {"name": "Detroit Lions", "city": "Detroit", "rank": 30, "logo": "detroit_lions_logo.png"},
                {"name": "Green Bay Packers", "city": "Green Bay", "rank": 5, "logo": "green_bay_packers_logo.png"},
                {"name": "Houston Texans", "city": "Houston", "rank": 32, "logo": "houston_texans_logo.png"},
                {"name": "Indianapolis Colts", "city": "Indianapolis", "rank": 12, "logo": "indianapolis_colts_logo.png"},
                {"name": "Jacksonville Jaguars", "city": "Jacksonville", "rank": 28, "logo": "jacksonville_jaguars_logo.png"},
                {"name": "Kansas City Chiefs", "city": "Kansas City", "rank": 1, "logo": "kansas_city_chiefs_logo.png"},
                {"name": "Las Vegas Raiders", "city": "Las Vegas", "rank": 23, "logo": "las_vegas_raiders_logo.png"},
                {"name": "Los Angeles Chargers", "city": "Los Angeles", "rank": 15, "logo": "los_angeles_chargers_logo.png"},
                {"name": "Los Angeles Rams", "city": "Los Angeles", "rank": 4, "logo": "los_angeles_rams_logo.png"},
                {"name": "Miami Dolphins", "city": "Miami", "rank": 16, "logo": "miami_dolphins_logo.png"},
                {"name": "Minnesota Vikings", "city": "Minneapolis", "rank": 19, "logo": "minnesota_vikings_logo.png"},
                {"name": "New England Patriots", "city": "Foxborough", "rank": 13, "logo": "new_england_patriots_logo.png"},
                {"name": "New Orleans Saints", "city": "New Orleans", "rank": 18, "logo": "new_orleans_saints_logo.png"},
                {"name": "New York Giants", "city": "East Rutherford", "rank": 27, "logo": "new_york_giants_logo.png"},
                {"name": "New York Jets", "city": "East Rutherford", "rank": 31, "logo": "new_york_jets_logo.png"},
                {"name": "Philadelphia Eagles", "city": "Philadelphia", "rank": 25, "logo": "philadelphia_eagles_logo.png"},
                {"name": "Pittsburgh Steelers", "city": "Pittsburgh", "rank": 17, "logo": "pittsburgh_steelers_logo.png"},
                {"name": "San Francisco 49ers", "city": "Santa Clara", "rank": 8, "logo": "san_francisco_49ers_logo.png"},
                {"name": "Seattle Seahawks", "city": "Seattle", "rank": 11, "logo": "seattle_seahawks_logo.png"},
                {"name": "Tampa Bay Buccaneers", "city": "Tampa", "rank": 2, "logo": "tampa_bay_buccaneers_logo.png"},
                {"name": "Tennessee Titans", "city": "Nashville", "rank": 10, "logo": "tennessee_titans_logo.png"},
                {"name": "Washington Football Team", "city": "Landover", "rank": 22, "logo": "washington_football_team_logo.png"},
            ]
            
            teams = [Team(name=data["name"], city=data["city"], rank=data["rank"], logo=data["logo"]) for data in teams_data]
            # Add quarterbacks
            qb_players = [
                Player(name="Tom Brady", position="Quarterback", team=teams[22]),  # New England Patriots
                Player(name="Patrick Mahomes", position="Quarterback", team=teams[15]),  # Kansas City Chiefs
                Player(name="Josh Allen", position="Quarterback", team=teams[3]),  # Buffalo Bills
                Player(name="Aaron Rodgers", position="Quarterback", team=teams[11]),  # Green Bay Packers
                Player(name="Russell Wilson", position="Quarterback", team=teams[30]),  # Seattle Seahawks
                Player(name="Dak Prescott", position="Quarterback", team=teams[8]),  # Dallas Cowboys
                Player(name="Kyler Murray", position="Quarterback", team=teams[0]),  # Arizona Cardinals
                Player(name="Justin Herbert", position="Quarterback", team=teams[17]),  # Los Angeles Chargers
                Player(name="Ryan Tannehill", position="Quarterback", team=teams[31]),  # Tennessee Titans
                Player(name="Matthew Stafford", position="Quarterback", team=teams[18]),  # Los Angeles Rams
                # Add more quarterbacks...
            ]

            # Add running backs
            rb_players = [
                Player(name="Derrick Henry", position="Running Back", team=teams[31]),  # Tennessee Titans
                Player(name="Christian McCaffrey", position="Running Back", team=teams[4]),  # Carolina Panthers
                Player(name="Dalvin Cook", position="Running Back", team=teams[21]),  # Minnesota Vikings
                Player(name="Alvin Kamara", position="Running Back", team=teams[23]),  # New Orleans Saints
                Player(name="Nick Chubb", position="Running Back", team=teams[7]),  # Cleveland Browns
                Player(name="Ezekiel Elliott", position="Running Back", team=teams[8]),  # Dallas Cowboys
                Player(name="Saquon Barkley", position="Running Back", team=teams[22]),  # New York Giants
                Player(name="Joe Mixon", position="Running Back", team=teams[6]),  # Cincinnati Bengals
                Player(name="Jonathan Taylor", position="Running Back", team=teams[13]),  # Indianapolis Colts
                Player(name="David Montgomery", position="Running Back", team=teams[5]),  # Chicago Bears
            ]
            
            # Add wide receivers
            wr_players = [
                Player(name="Davante Adams", position="Wide Receiver", team=teams[11]),  # Green Bay Packers
                Player(name="Tyreek Hill", position="Wide Receiver", team=teams[15]),  # Kansas City Chiefs
                Player(name="Stefon Diggs", position="Wide Receiver", team=teams[3]),  # Buffalo Bills
                Player(name="DeAndre Hopkins", position="Wide Receiver", team=teams[0]),  # Arizona Cardinals
                Player(name="Justin Jefferson", position="Wide Receiver", team=teams[21]),  # Minnesota Vikings
                Player(name="A.J. Brown", position="Wide Receiver", team=teams[31]),  # Tennessee Titans
                Player(name="Keenan Allen", position="Wide Receiver", team=teams[17]),  # Los Angeles Chargers
                Player(name="Allen Robinson", position="Wide Receiver", team=teams[5]),  # Chicago Bears
                Player(name="Mike Evans", position="Wide Receiver", team=teams[29]),  # Tampa Bay Buccaneers
                Player(name="Chris Godwin", position="Wide Receiver", team=teams[29]),  # Tampa Bay Buccaneers
            ]

            # Add defensive players
            defense_players = [
                Player(name="T.J. Watt", position="Defensive Player", team=teams[27]),  # Pittsburgh Steelers
                Player(name="Aaron Donald", position="Defensive Player", team=teams[18]),  # Los Angeles Rams
                Player(name="Myles Garrett", position="Defensive Player", team=teams[7]),  # Cleveland Browns
                Player(name="Bobby Wagner", position="Defensive Player", team=teams[30]),  # Seattle Seahawks
                Player(name="                Xavien Howard", position="Defensive Player", team=teams[20]),  # Miami Dolphins
                Player(name="Khalil Mack", position="Defensive Player", team=teams[5]),  # Chicago Bears
                Player(name="Nick Bosa", position="Defensive Player", team=teams[28]),  # San Francisco 49ers
                Player(name="Jalen Ramsey", position="Defensive Player", team=teams[18]),  # Los Angeles Rams
                Player(name="Cameron Jordan", position="Defensive Player", team=teams[23]),  # New Orleans Saints
                Player(name="Devin White", position="Defensive Player", team=teams[29]),  # Tampa Bay Buccaneers
            ]

            # Create games
            games = [
                Game(date=datetime(2022, 9, 10), home_team=teams[22], away_team=teams[23], home_team_score=16, away_team_score=20),
                Game(date=datetime(2022, 9, 11), home_team=teams[24], away_team=teams[25], home_team_score=13, away_team_score=31),
                # Add more games...
            ]

            # Create performances
            performances = []
            for idx, player in enumerate(qb_players):
                performances.append(Performance(player=player, game=games[idx % len(games)], score=idx % 6))

            for idx, player in enumerate(rb_players):
                performances.append(Performance(player=player, game=games[idx % len(games)], score=idx % 6))

            for idx, player in enumerate(wr_players):
                performances.append(Performance(player=player, game=games[idx % len(games)], score=idx % 6))

            for idx, player in enumerate(defense_players):
                performances.append(Performance(player=player, game=games[idx % len(games)], score=idx % 6))

            # Add all records to the session
            print("Adding records to the database...")
            db.session.add_all(teams)
            db.session.add_all(qb_players)
            db.session.add_all(rb_players)
            db.session.add_all(wr_players)
            db.session.add_all(defense_players)
            db.session.add_all(games)
            db.session.add_all(performances)
            db.session.commit()

            print("Seeding done!")
        except Exception as e:
            print(f"An error occurred: {e}")
            db.session.rollback()

if __name__ == '__main__':
    seed_data()

