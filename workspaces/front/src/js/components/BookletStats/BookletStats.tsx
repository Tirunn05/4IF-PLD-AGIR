import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './BookletStats.module.css';
import GameHistoryPopup from "@components/GameHistoryPopup/GameHistoryPopup.tsx";
import { api } from '../../../api';

const BookletStats: React.FC = () => {
    const { t } = useTranslation('greenIt', {keyPrefix:'booklet-stats'});

    const [nb_played, setNb_played] = useState<number>();
    const [nb_win, setNb_win] = useState<number>();
    const [percent_win, setPercent_win] = useState<number>();
    const [total_CO2, setTotal_CO2] = useState<number>();
    const [nb_BP, setNb_BP] = useState<number>();
    const [nb_MP, setNb_MP] = useState<number>();

    const [openHistory, setOpenHistory] = useState(false);

    useEffect(() => {
        async function fetchData() {
            console.log("------------useEffect Stats--------");
            const token = localStorage.getItem('token');
            if (!token || token === 'undefined') {
                console.error('No token found in local storage');
                return;
            }
            try {
                console.log('token in booklet:', token);
                //get pour retrouver le nombre de parties jouées par l'utilisateur
                const responsePlayed = await api.get(`/users/nbGames?token=${token}`);
                const { nb_games } = responsePlayed.data;
                console.log(responsePlayed);
                setNb_played(nb_games);

                //Get Victory count
                const responseWin = await api.get(`/users/nbVictories?token=${token}`);
                const { nb_victories } = responseWin.data;
                setNb_win(nb_victories);

                // Calcul du pourcentage de victoires
                if (nb_victories !== null && nb_games !== null && nb_games !== 0) {
                    const winPercentage = (nb_victories / nb_games) * 100;
                    setPercent_win(winPercentage);
                } else {
                    setPercent_win(0);
                }

                // get pour retrouver le total de CO2 sauvé par l'utilisateur
                const responseCO2 = await api.get(`/users/totalCO2Saved?token=${token}`);
                const { total_co2_saved } = responseCO2.data;
                setTotal_CO2(total_co2_saved);

                // get pour retrouver le nombre de bonnes pratiques archivées par l'utilisateur
                const nbBonnePratique = await api.get(`/users/nbGreenITPractices?token=${token}`);
                const { nb_green_it_practices: nb_BP } = nbBonnePratique.data;
                setNb_BP(nb_BP);

                // get pour retrouver le nombre de mauvaises pratiques archivées par l'utilisateur
                const nbMauvaisePratique = await api.get(`/users/nbMauvaisePratice?token=${token}`);
                const { nb_mauvaise_pratice: nb_MP } = nbMauvaisePratique.data;
                setNb_MP(nb_MP);

            } catch (error) {
                console.error('Error fetching info:', error.message);
            }
        }
        fetchData();
    }, []);

    return (
        <div className={styles.container}>
            <h3>{t('title')}</h3>
            <div className={styles.statistique}>
                <h4>{t('statistics.games-played.label')}</h4>
                <p>
                    {nb_played !== null && nb_played !== undefined 
                        ? nb_played 
                        : <i>{t('statistics.games-played.error')}</i>}
                </p>
            </div>
            <div className={styles.statistique}>
                <h4>{t('statistics.victories.label')}</h4>
                <p>
                    {nb_win !== null && nb_win !== undefined 
                        ? t('statistics.victories.format', { 
                            nbvictories: nb_win, 
                            percentage: percent_win?.toFixed(2) 
                        }) 
                        : <i>{t('statistics.games-played.error')}</i>}
                </p>
            </div>
            <div className={styles.statistique}>
                <h4>{t('statistics.co2-saved.label')}</h4>
                <p>
                    {total_CO2 !== null && total_CO2 !== undefined 
                        ? `${total_CO2} ${t('statistics.co2-saved.unit')}` 
                        : <i>{t('statistics.games-played.error')}</i>}
                </p>
            </div>
            <div className={styles.statistique}>
                <h4>{t('statistics.good-practices.label')}</h4>
                <p>
                    {nb_BP !== null && nb_BP !== undefined 
                        ? nb_BP 
                        : <i>{t('statistics.good-practices.error')}</i>}
                </p>
            </div>
            <div className={styles.statistique}>
                <h4>{t('statistics.bad-practices.label')}</h4>
                <p>
                    {nb_MP !== null && nb_MP !== undefined 
                        ? nb_MP 
                        : <i>{t('statistics.bad-practices.error')}</i>}
                </p>
            </div>
            <p className={styles.historique} onClick={() => setOpenHistory(true)}> &gt; {t('history-button')} </p>
            <GameHistoryPopup open={openHistory} setOpen={setOpenHistory} />
        </div>
    );
};

export default React.memo(BookletStats);