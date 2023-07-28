import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ML from "../assets/ML.jpg";
import FL from "../assets/FL.jpg";
import DT from "../assets/DT.jpg";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className="d-flex justify-content-around p-5">
        <Card sx={{ maxWidth: 345, margin: 5 }}>
          <CardHeader
            title="Mobile Legends - Notice About Account Security(Update)"
            subheader="July 28, 2023"
          />
          <CardMedia
            component="img"
            height="194"
            image={ML}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              In order to protect the benefits and account security of Mobile
              Legends: Bang Bang players, to maintain a fair and orderly
              environment and to prevent account hacking/loss that results from
              account sharing, account trading etc. Please read the following
              notice to enhance your awareness of account security:
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>I Notice</Typography>
              <Typography paragraph>
                Please protect your account and keep it safe. Do not share your
                account password with others or in public. The official team
                never asks for your password. Do not sell your account. We will
                not deal with the problem results from account trading, or you
                will be solely responsible for any subsequent consequences that
                may arise. Do not click unknown links or the links provided by
                other players (fake official staff) for recharge giveaways, free
                accounts, free skins etc. Our customer service email addresses
                are mobilelegendsgame@moonton.com and
                donoreply@register-sc.moonton.com. Do not recharge via
                unofficial channels or third parties. Unofficial channels
                usually steal your account information that may compromise your
                account.
              </Typography>
              <Typography paragraph>
                Please be noticed that official staff doesn't show in the game.
                The so-called official staff or GMs in the game are fake. Please
                report when you meet them. If you see an event trailor or
                promotion on community/social media, please be sure to identify
                the official account/page. You can check the official
                account/page in Community(globe icon) on the left side of the
                home screen in the game. In order to better protect the security
                of user accounts, we will gradually impose functional
                restrictions on devices such as virtual machines and emulators
                (including but not limited to account switching, recharging,
                logging in, etc.). We also recommend that players use regular
                mobile devices to experience our game as much as possible for
                better account security.
              </Typography>
              <Typography paragraph>
                Ⅱ About Account Recovery If the social media account that you
                are bound to is hacked, please inform the help desk and change
                your password as soon as possible. If your account is
                compromised, please contact us by in-game Customer Service on
                your usual device. You have to complete a form correctly,
                otherwise the GM will not be able to solve your issue. The
                following situations are not considered Hacked: A: You shared
                your account with any third party and failed to take the account
                back . B: Your account had been logged in or used by someone
                other than you. We can’t judge the account was hacked or not.
                Additionally, if you haven’t bound your account, there is a risk
                of account loss. Please tap on your avatar – "Account" – "Bind
                Account" to keep your account safe. Thanks for your
                understanding and support. Let’s keep Mobile Legends: Bang Bang
                in a safe and harmonious environment.
              </Typography>
              <Typography>-ClearGames PH</Typography>
            </CardContent>
          </Collapse>
        </Card>
        <Card sx={{ maxWidth: 345, margin: 5 }}>
          <CardHeader
            title="Farlight 84 - V14.4.0.0 Patch Notes"
            subheader="July 28, 2023"
          />
          <CardMedia
            component="img"
            height="194"
            image={FL}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Farlight 84 is scheduled for an awesome tune-up to Version
              14.4.0.0 at 2023-7-27! The downtime will be approximately three
              hours. We apologize for the inconvenience, but on the bright side,
              you'll be compensated with Gold x4,000! Survivors can update the
              game at app stores after the latest version update. The brand-new
              features, including Battle Pass - Metro Fantasy and Lottery Wheel
              - Candelia Vacation, are all available now!
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>WHAT'S NEW</Typography>
              <Typography paragraph>
                ▌Brand-new Battle Pass - 「Metro Fantasy」 As technology
                advanced, people's imaginations soared, envisioning a futuristic
                utopian city a hundred years from now. This city is no longer a
                cold, lifeless steel jungle but a place where the glimmering of
                metal adds beauty and inspiration. Filled with hope, its
                residents embrace the endless possibilities of the future. ◇
                Battle Pass Phase 6: 1) [Metro Fantasy] Battle Pass is here!
                Rewards include: - SSR Hero Skin Maggie - Trans-dimension Agent
                - SR Weapon Skin Defender - Future Traveler - SR Vehicle Skin
                Wasteland Hovercraft - Sizzling Times - And a ton of other SR
                Items, loads of Diamonds and Gold, just begging to be unlocked!
                2) This new Battle Pass will last from [2023/7/27 10:00 UTC] -
                [2023/8/23 22:00 UTC], during which you can get awesome rewards
                by completing Missions to upgrade your Pass level!
              </Typography>
              <Typography paragraph>
                ▌All New Lottery Event - 「Candelia Vacation」 Amid midsummer,
                the long-forgotten coastline comes alive with the gentle breeze,
                rolling waves, warm sunshine, and refreshing sips of ice-cold
                orange soda. Capsulers, taking a break from their fierce
                competitions, gather at Candelia Bay. Stepping onto the soft
                sandy beach, they venture into the depths of the sea,
                surrendering to the ocean's embrace. The beach is a vibrant
                oasis of youth and vitality, momentarily making them forget the
                post-apocalyptic world they inhabit. ◇ Lottery Wheel - Candelia
                Vacation！Lottery Chest includes: - SSR Hero Skin Lucinda -
                Rosemary's Kiss - SSR Pod - Flamenco - SSR Trail - Rainbow
                Bonfire - More SR Skins just waiting for you to unlock! Lottery
                Duration: [2023/7/27 10:00 UTC] - [UTC 2023/8/24 06:00 UTC].
              </Typography>
              <Typography paragraph></Typography>
              <Typography>-ClearGames PH</Typography>
            </CardContent>
          </Collapse>
        </Card>
        <Card sx={{ maxWidth: 345, margin: 5 }}>
          <CardHeader
            title="Dota 2 - Between the Lanes: Unbreaking A Bomb"
            subheader="July 27, 2023"
          />
          <CardMedia
            component="img"
            height="194"
            image={DT}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Introducing Between the Lanes, a new blog feature where we let
              members of our development team walk through some of the
              challenges, bugfixes, and occasional happy accidents we encounter
              while working on a game as unique as Dota.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Announcement</Typography>
              <Typography paragraph>
                Every Dota update gives us a chance to introduce new heroes,
                items, and abilities into the game — not to mention tweak
                countless old ones. This keeps Dota evolving as a game, but it
                also introduces an incalculable number of potential
                interactions. While this means there’s always something new to
                experience in every match, it also increases the likelihood that
                some of our changes introduce the occasional bug or two. Or
                twenty. Fortunately, the Dota community is constantly
                experimenting and exploring, and is quick to discover hidden
                advantages, new meta, and outright game-breaking bugs that catch
                even us by surprise. The Techies’ Sticky Bomb bug is a perfect
                example of this. The roots of the bug were introduced as far
                back as the Techies update last year, when we unveiled a rework
                of their abilities and playstyle. This rework created a bug
                where Techies’ Sticky Bombs didn't expire, and in some cases
                became controllable by the casting player. But interestingly,
                because of the parameters of the game at the time, there were no
                circumstances where the bug could actually occur in a match. So
                it laid dormant until the Twin Gates appeared with The New
                Frontiers 7.33 Update this past spring.
              </Typography>
              <Typography paragraph>
                Suddenly, Techies players were able to create guided Sticky
                Bombs they could move around the map, raining down unlimited
                lethal explosives on enemy players. This was... a bit of an
                advantage. So it wasn't long before we started hearing rumblings
                on our github.
              </Typography>
              <Typography paragraph>
                A common pattern in gameplay programming generally, and
                especially in Dota, is to create something new (that doesn’t
                break the game) by finding something similar that already exists
                (and works and is not game-breaking) and using it as a starting
                point to evolve changes. Sticky Bombs were based on the classic
                Techies’ Remote Mines. They’re implemented as a summon of a
                "npc_dota_techies_remote_mine" — the same base NPC type as the
                old Remote Mine NPC. Techies’ Sticky Bombs utilize a
                “toss”/”chase”/”countdown to explode” sequence that is managed
                by a series of server-side modifiers (buffs) on the NPC to
                handle the unit motion and behavior of each step in the
                sequence. The "chase" and "countdown" modifiers prevented player
                orders via state flags in the modifier itself. The "toss"
                modifier prevented many types of player commands as a result of
                being a motion controller, along with the nature of the
                npc_dota_techies_remote_mine itself (specifically, that the NPC
                has AttackCapability DOTA_UNIT_CAP_NO_ATTACK).
              </Typography>
              <Typography>-ClearGames PH</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </>
  );
}
