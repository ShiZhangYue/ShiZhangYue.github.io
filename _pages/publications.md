---
layout: archive
title: "Research and Publications"
permalink: /publications/
author_profile: true
---

<div class="lang-en-block" markdown="1">

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
1. Li, Y., Xie, T., Liu, C., & **Shi, Z.***. (2024). Pseudo Replay-based Class Continual Learning for Online New Category Anomaly Detection in Additive Manufacturing, IISE Transactions. [[link]](https://doi.org/10.1080/24725854.2024.2428642)
2. **Shi, Z.**, Li, Y., & Liu, C. (2024). Knowledge Distillation-based Information Sharing for Online Process Monitoring in Decentralized Manufacturing System, Journal of Intelligent Manufacturing [[link]](https://doi.org/10.1007/s10845-024-02348-9 )
3. **Shi, Z.**, Oskolkov, B., Tian, W., Kan, C., & Liu, C. (2024). Sensor Data Protection through Integration of Blockchain and Camouflaged Encryption in Cyber-physical Manufacturing Systems. Journal of Computing and Information Science in Engineering. [[link]](https://doi.org/10.1115/1.4063859)
4. Li, Y., **Shi, Z.**, & Liu, C., (2023). Transformer-enabled Generative Adversarial Imputation Network with Selective Generation (SGT-GAIN) for Missing Region Imputation. IISE Transactions. [[link]](https://doi.org/10.1080/24725854.2023.2193257)
5. Xiao, P., **Shi, Z.**, Liu, C., & Hagen, D. (2023). Characteristics of Circulating Small Non-Coding RNAs in Plasma and Serum during Human Aging. Aging Medicine. [[link]](https://doi.org/10.1002/agm2.12241)
6. **Shi, Z.**, Mandal, S., Harimkar, S., & Liu, C. (2022). Hybrid data-driven feature extraction-enabled surface modeling for metal additive manufacturing. The International Journal of Advanced Manufacturing Technology, 121(7), 4643-4662. [[link]](https://doi.org/10.1007/s00170-022-09608-z)
7. **Shi, Z.**, Mamun, A. A., Kan, C., Tian, W., & Liu, C. (2022). An LSTM-autoencoder based online side channel monitoring approach for cyber-physical attack detection in additive manufacturing. Journal of Intelligent Manufacturing, 1-17. [[link]](https://doi.org/10.1007/s10845-021-01879-9)
8. **Shi, Z.**, Kan, C., Tian, W., & Liu, C. (2021). A Blockchain-based G-code protection approach for cyber-physical security in additive manufacturing. Journal of Computing and Information Science in Engineering, 21(4). [[link]](https://doi.org/10.1115/1.4048966)
9. Li, Y., **Shi, Z.**, Liu, C., Tian, W., Kong, Z., & Williams, C. B. (2021). Augmented Time Regularized Generative Adversarial Network (ATR-GAN) for Data Augmentation in Online Process Anomaly Detection. IEEE Transactions on Automation Science and Engineering (This work is selected as the finalist of the Data Challenge Award, QSR Section, INFORMS, 2019). [[link]](https://doi.org/10.1109/TASE.2021.3118635)



Conference Publication
------
1. **Shi, Z.**, Li, Y., & Liu, C. (2022). Knowledge Distillation-enabled Multi-stage Incremental Learning for Online Process Monitoring in Advanced Manufacturing. IEEE International Conference on Data Mining, (ICDM) IncrLearn Workshop. [[link]](https://doi.org/10.1109/ICDMW58026.2022.00154)
2. **Shi, Z.**, Liu, C., Kan, C., Tian, W., & Chen, Y. (2021, August). A Blockchain-Enabled Approach for Online Stream Sensor Data Protection in Cyber-Physical Manufacturing Systems. In International Design Engineering Technical Conferences and Computers and Information in Engineering Conference (Vol. 85376, p. V002T02A035). American Society of Mechanical Engineers. [[link]](https://doi.org/10.1115/DETC2021-72023)
3. **Shi, Z.**, Mandal, S., Harimkar, S., & Liu, C. (2021). Surface Morphology Analysis Using Convolutional Autoencoder in Additive Manufacturing with Laser Engineered Net Shaping. Procedia Manufacturing, 53, 16-23. [[link]](https://doi.org/10.1016/j.promfg.2021.06.005)

</div>

<div class="lang-zh-block" markdown="1">

研究概述
------
当前，数字化和传感器融合使制造系统日益网络化，提供了丰富的数据资源以解决质量问题。尽管前景广阔，如何有效利用这些数据仍是一大挑战。此外，随着制造系统的网络化，包含产品关键信息的重要文件与数据也面临网络物理攻击的威胁。因此，我的研究目标是提出一套有效的方法论框架，从**数据质量**、**设计质量**和**过程质量**三个维度保护并利用数据以实现质量保证。

**数据质量保障**：面向制造业网络物理安全的区块链方案
- 使用Python将区块链应用于重要文件（G-code）/数据（流式数据）的存储。通过检测区块哈希值的不匹配，可及时准确地识别对文件的恶意篡改。
- 利用非对称加密将文件加密为密文；设计伪装方法，将密文伪装成与原始数据格式相似的"数据"，从而降低未授权访问的风险。

**设计质量保障**：面向工艺设计的混合数据驱动特征提取表面建模
- 提出包含机器学习特征与统计特征的混合特征提取框架。
- 开发鲁棒卷积自动编码器，从含有大量离群值、气孔和偏移的3D打印表面中提取低维特征。
- 将提取的特征与机器参数进行关联。

**过程质量保障**：开发基于机器学习的方法提升原位监测性能
- 搭建实验平台，通过加速度计和树莓派采集原位打印振动信号。
- 应用LSTM自动编码器提取振动信号特征，并将其用于有监督和无监督过程监控。有监督监控采用自适应增强分类器区分正常与异常状态；无监督监控利用OCSVM预测异常分数，并基于该分数构建EWMA控制图。
- 提出基于增强时序正则化生成对抗网络（ATR-GAN）的数据增强方法，生成高质量异常数据以提升分类器训练效果和有监督监测性能。
- 在去中心化系统中融入知识蒸馏框架，在保护数据隐私的同时提升各代理节点神经网络的精度和训练效率。

期刊论文
------
1. Li, Y., Xie, T., Liu, C., & **Shi, Z.***. (2024). Pseudo Replay-based Class Continual Learning for Online New Category Anomaly Detection in Additive Manufacturing, IISE Transactions. [[链接]](https://doi.org/10.1080/24725854.2024.2428642)
2. **Shi, Z.**, Li, Y., & Liu, C. (2024). Knowledge Distillation-based Information Sharing for Online Process Monitoring in Decentralized Manufacturing System, Journal of Intelligent Manufacturing. [[链接]](https://doi.org/10.1007/s10845-024-02348-9)
3. **Shi, Z.**, Oskolkov, B., Tian, W., Kan, C., & Liu, C. (2024). Sensor Data Protection through Integration of Blockchain and Camouflaged Encryption in Cyber-physical Manufacturing Systems. Journal of Computing and Information Science in Engineering. [[链接]](https://doi.org/10.1115/1.4063859)
4. Li, Y., **Shi, Z.**, & Liu, C., (2023). Transformer-enabled Generative Adversarial Imputation Network with Selective Generation (SGT-GAIN) for Missing Region Imputation. IISE Transactions. [[链接]](https://doi.org/10.1080/24725854.2023.2193257)
5. Xiao, P., **Shi, Z.**, Liu, C., & Hagen, D. (2023). Characteristics of Circulating Small Non-Coding RNAs in Plasma and Serum during Human Aging. Aging Medicine. [[链接]](https://doi.org/10.1002/agm2.12241)
6. **Shi, Z.**, Mandal, S., Harimkar, S., & Liu, C. (2022). Hybrid data-driven feature extraction-enabled surface modeling for metal additive manufacturing. The International Journal of Advanced Manufacturing Technology, 121(7), 4643-4662. [[链接]](https://doi.org/10.1007/s00170-022-09608-z)
7. **Shi, Z.**, Mamun, A. A., Kan, C., Tian, W., & Liu, C. (2022). An LSTM-autoencoder based online side channel monitoring approach for cyber-physical attack detection in additive manufacturing. Journal of Intelligent Manufacturing, 1-17. [[链接]](https://doi.org/10.1007/s10845-021-01879-9)
8. **Shi, Z.**, Kan, C., Tian, W., & Liu, C. (2021). A Blockchain-based G-code protection approach for cyber-physical security in additive manufacturing. Journal of Computing and Information Science in Engineering, 21(4). [[链接]](https://doi.org/10.1115/1.4048966)
9. Li, Y., **Shi, Z.**, Liu, C., Tian, W., Kong, Z., & Williams, C. B. (2021). Augmented Time Regularized Generative Adversarial Network (ATR-GAN) for Data Augmentation in Online Process Anomaly Detection. IEEE Transactions on Automation Science and Engineering（本工作入围INFORMS 2019年会QSR分部数据挑战奖决赛）. [[链接]](https://doi.org/10.1109/TASE.2021.3118635)

会议论文
------
1. **Shi, Z.**, Li, Y., & Liu, C. (2022). Knowledge Distillation-enabled Multi-stage Incremental Learning for Online Process Monitoring in Advanced Manufacturing. IEEE国际数据挖掘会议（ICDM）IncrLearn研讨会. [[链接]](https://doi.org/10.1109/ICDMW58026.2022.00154)
2. **Shi, Z.**, Liu, C., Kan, C., Tian, W., & Chen, Y. (2021年8月). A Blockchain-Enabled Approach for Online Stream Sensor Data Protection in Cyber-Physical Manufacturing Systems. 国际设计工程技术会议暨计算机与信息工程会议（Vol. 85376, p. V002T02A035）. [[链接]](https://doi.org/10.1115/DETC2021-72023)
3. **Shi, Z.**, Mandal, S., Harimkar, S., & Liu, C. (2021). Surface Morphology Analysis Using Convolutional Autoencoder in Additive Manufacturing with Laser Engineered Net Shaping. Procedia Manufacturing, 53, 16-23. [[链接]](https://doi.org/10.1016/j.promfg.2021.06.005)

</div>
