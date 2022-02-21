---
layout: archive
title: "Research and Publications"
permalink: /publications/
author_profile: true
---

Research Outline
------
Nowadays, digitalization and sensor fusion make manufacturing system more and more cyber-enabled, which provides a data-rich environment to address quality issue. In spite of the promising potential, how to effectively utilize these data remains challenging. In addition, as manufacturing system becomes cyber-enabled, important file/data containing key information of product are exposed to cyber-physical attack as well. Therefore, the objective of my research is to propose an effective methodological framework to protect and utilize the data for quality assurance from 3 different perspectives: **data quality**, **design quality** and **process quality**.

**Data quality Assurance**: A blockchain-enabled approach for cyber-physical security protection in manufacturing
-	Apply blockchain for important file (G-code)/data (stream data) storage using Python. Via mismatch of hash value in blocks, malicious modification on files could be detected timely and accurately.
- Utilize asymmetry encryption method to encrypt files to ciphertext; design a camouflage method to camouflage ciphertext to "data" having similar format with original one, which could reduce risk of unauthorized access on files.
  
**Design quality assurance**: Hybrid data-driven feature extraction-enabled surface modeling for process design
- Propose a hybrid feature extraction framework which consists of machine learning-based feature and statistics feature.
- Develop a robust convolutional autoencoder to extract low-dimensional features from 3D printing surface with large fraction of outliers, porosities, and shifts.
- Correlate extracted features with machine parameters.

**Process quality assurance**: Develop machine learning-based methods to enhance the *in-situ* monitoring performance
- Set up experimental platform; collect in-situ printing vibration signal via accelerometer and Raspberry Pi.
- Apply LSTM-autoencoder to extract feature from vibration signal then utilize extracted features in both supervised and unsupervised process monitoring. For supervised monitoring, apply adaptive boosting classifier to classify normal and anomaly status. For unsupervised monitoring, utilize OCSVM to predict anomaly score from extracted feature and then construct EWMA chart based on the score.
- Propose a data augmentation method based on Augmented Time Regularized Generative Adversarial Network (ATR-GAN) for anomaly which could generate more high-quality anomaly data for classifier training and enhance the supervised monitoring performance.
- Incorporate knowledge distillation framework in decentralized system to improve accuracy, training efficiency of neural network among different agents while preserving data privacy.


Journal Publication
------
1. **Shi, Z.**, Mamun, A. A., Kan, C., Tian, W., & Liu, C. (2022). An LSTM-autoencoder based online side channel monitoring approach for cyber-physical attack detection in additive manufacturing. Journal of Intelligent Manufacturing, 1-17. [[link]](https://doi.org/10.1007/s10845-021-01879-9)
2. **Shi, Z.**, Kan, C., Tian, W., & Liu, C. (2021). A Blockchain-based G-code protection approach for cyber-physical security in additive manufacturing. Journal of Computing and Information Science in Engineering, 21(4). [[link]](https://doi.org/10.1115/1.4048966)
3. Li, Y., **Shi, Z.**, Liu, C., Tian, W., Kong, Z., & Williams, C. B. (2021). Augmented Time Regularized Generative Adversarial Network (ATR-GAN) for Data Augmentation in Online Process Anomaly Detection. IEEE Transactions on Automation Science and Engineering (This work is selected as the finalist of the Data Challenge Award, QSR Section, INFORMS, 2019). [[link]](https://doi.org/10.1109/TASE.2021.3118635)

Conference Publication
------
1. **Shi, Z.**, Liu, C., Kan, C., Tian, W., & Chen, Y. (2021, August). A Blockchain-Enabled Approach for Online Stream Sensor Data Protection in Cyber-Physical Manufacturing Systems. In International Design Engineering Technical Conferences and Computers and Information in Engineering Conference (Vol. 85376, p. V002T02A035). American Society of Mechanical Engineers. [[link]](https://doi.org/10.1115/DETC2021-72023)
2. **Shi, Z.**, Mandal, S., Harimkar, S., & Liu, C. (2021). Surface Morphology Analysis Using Convolutional Autoencoder in Additive Manufacturing with Laser Engineered Net Shaping. Procedia Manufacturing, 53, 16-23. [[link]](https://doi.org/10.1016/j.promfg.2021.06.005)
